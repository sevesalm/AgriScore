import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class ScoreTable extends React.Component {
    render() {
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
                                <TableRow>
                                    <TableRowColumn>{this.props.scores.player1.name}</TableRowColumn>
                                    <TableRowColumn>{this.props.scores.player1.score}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>{this.props.scores.player2.name}</TableRowColumn>
                                    <TableRowColumn>{this.props.scores.player2.score}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>{this.props.scores.player3.name}</TableRowColumn>
                                    <TableRowColumn>{this.props.scores.player3.score}</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>{this.props.scores.player4.name}</TableRowColumn>
                                    <TableRowColumn>{this.props.scores.player4.score}</TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default ScoreTable;