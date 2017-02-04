import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import ScoreSheet from './ScoreSheet';
import ScoreTable from './ScoreTable';
injectTapEventPlugin();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: {name: 'Player 1', score: -1},
            player2: {name: 'Player 2', score: -1},
            player3: {name: 'Player 3', score: -1},
            player4: {name: 'Player 4', score: -1}
        };
        this.handleNewScore = this.handleNewScore.bind(this);
    }

    handleNewScore(item) {
        let newState = {};
        newState[item.player] = this.state[item.player];
        newState[item.player].score = item.score;
        this.setState(newState);
    }

    render () {
        let players = this.state;
        let tabarray = [];
        for(let key in players) {
            let tab = 
                <Tab buttonStyle={{fontSize: 13}} label={players[key].name} key={tabarray.length}>
                    <div className='row'>
                        <div className='col-sm-10 col-sm-offset-1 col-xs-12'>
                            <ScoreSheet onChange={this.handleNewScore} player={key} />
                            <div className='row center-xs'>
                                <div className='col-sm'>
                                    <h3>Total: {players[key].score}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>;
            tabarray.push(tab);
        }

        return (
            <MuiThemeProvider>
                <Tabs>
                    {tabarray}
                    <Tab label="Summary" buttonStyle={{fontSize: 13}}>
                        <ScoreTable scores={this.state} />
                    </Tab>
                </Tabs>
            </MuiThemeProvider>
        );
    }
}

export default App;