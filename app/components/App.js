import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import {ScoreSheet, ScoreTotal} from './ScoreSheet';
import RaisedButton from 'material-ui/RaisedButton';
import AvReplay from 'material-ui/svg-icons/av/replay';
import ScoreTable from './ScoreTable';
import NameDialog from './NameDialog';

injectTapEventPlugin();

var tabFontStyle = {fontSize: 13};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [
                {name: 'Player 1', score: -1},
                {name: 'Player 2', score: -1},
                {name: 'Player 3', score: -1},
                {name: 'Player 4', score: -1}
            ]
        };
        this.handleNewScore = this.handleNewScore.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(item) {
        let newState = this.state.players.slice(0);
        newState[item.player].name = item.name;
        this.setState(newState);
    }

    handleNewScore(item) {
        let newState = this.state.players.slice(0);
        newState[item.player].score = item.score;
        this.setState(newState);
    }

    render () {
        let players = this.state.players;
        let tabarray = players.map((item, idx) => {
            return(
                <Tab buttonStyle={tabFontStyle} label={item.name} key={idx}>
                    <div className='row'>
                        <div className='col-sm-10 col-sm-offset-1 col-xs-12'>
                            <ScoreSheet onChange={this.handleNewScore} player={idx} />
                            <div className='row center-xs middle-xs'>
                                <div className='col-sm-8 col-xs-12'>
                                    <ScoreTotal score = {item.score} />
                                </div>
                                <div className='col-sm-2 col-xs-6'>
                                    <RaisedButton label="Reset" labelPosition="before" secondary={true} disabled={true} icon={<AvReplay />} style={{margin:10}} />
                                </div>
                                <div className='col-sm-2 col-xs-6'>
                                    <NameDialog player={idx} name={item.name} onChange={this.handleNameChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
            );
        });

        return (
            <MuiThemeProvider>
                <Tabs>
                    {tabarray}
                    <Tab label="All" buttonStyle={tabFontStyle}>
                        <ScoreTable players={this.state.players} />
                    </Tab>
                </Tabs>
            </MuiThemeProvider>
        );
    }
}

export default App;