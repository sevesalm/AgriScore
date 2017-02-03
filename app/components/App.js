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
        return (
            <div>
                <MuiThemeProvider>
                    <Tabs>
                        <Tab label="Player 1" >
                            <div className='row'>
                                <div className='col-sm-10 col-sm-offset-1 col-xs-12'>
                                    <ScoreSheet onChange={this.handleNewScore} player='player1' name={this.state.player1.name} />
                                    <div className='row center-xs'>
                                        <div className='col-sm'>
                                            <h3>Total: {this.state.player1.score}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab label="Player 2" >
                            <div className='row'>
                                <div className='col-sm-10 col-sm-offset-1 col-xs-12'>
                                    <ScoreSheet onChange={this.handleNewScore} player='player2' name={this.state.player2.name} />
                                    <div className='row center-xs'>
                                        <div className='col-sm'>
                                            <h3>Total: {this.state.player2.score}</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Tab>
                        <Tab label="Player 3" >
                            <div className='row'>
                                <div className='col-sm-10 col-sm-offset-1 col-xs-12'>
                                    <ScoreSheet onChange={this.handleNewScore} player='player3' name={this.state.player3.name} />
                                    <div className='row center-xs'>
                                        <div className='col-sm'>
                                            <h3>Total: {this.state.player3.score}</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Tab>
                        <Tab label="Player 4" >
                            <div className='row'>
                                <div className='col-sm-10 col-sm-offset-1 col-xs-12'>
                                    <ScoreSheet onChange={this.handleNewScore} player='player4' name={this.state.player4.name} />
                                    <div className='row center-xs'>
                                        <div className='col-sm'>
                                            <h3>Total: {this.state.player4.score}</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Tab>

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