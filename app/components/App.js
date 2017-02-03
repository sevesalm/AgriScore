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
        let playerArray = Object.keys(players).map(key => players[key]);
        let tabarray = playerArray.map((player, idx) => {
            return(
                <Tab label={player.name} key={idx}>
                    <div className='row'>
                        <div className='col-sm-10 col-sm-offset-1 col-xs-12'>
                            <ScoreSheet onChange={this.handleNewScore} player={'player' + idx+1} name={player.name} />
                            <div className='row center-xs'>
                                <div className='col-sm'>
                                    <h3>Total: {player.score}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
            );
        });

        return (
            <div>
                <MuiThemeProvider>
                    <Tabs>
                        {tabarray}
                        <Tab label="Summary" >
                            <ScoreTable scores={this.state} />
                        </Tab>
                    </Tabs>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;