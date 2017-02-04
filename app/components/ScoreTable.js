import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class ScoreTable extends React.Component {
    render() {
        let scorearray = this.props.scores.slice(0).sort((a, b) => {
            return (b.score - a.score);
        });

        let winner = false;
        if(scorearray[0].score > scorearray[1].score) {
            winner = true;
        }

        let tablerows = scorearray.map( (row, idx) => {
            let winnerStyle = {};
            if(winner && !idx) {
                winnerStyle = {fontWeight: "bold", fontSize: "1.5em"};
            }
            return (
                <TableRow key={idx}>
                    <TableRowColumn style={winnerStyle}>{row.name}</TableRowColumn>
                    <TableRowColumn style={winnerStyle}>{row.score}</TableRowColumn>
                </TableRow>
            );
        });

        return (
            <MuiThemeProvider>
                <div className='row'>
                    <div className='col-sm-8 col-sm-offset-2'>
                        <Table selectable={false}>
                            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                <TableRow>
                                    <TableHeaderColumn>Player</TableHeaderColumn>
                                    <TableHeaderColumn>Score</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                {tablerows}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default ScoreTable;