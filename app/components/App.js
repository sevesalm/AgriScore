import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import {ScoreSheet, ScoreTotal} from './ScoreSheet';
import ScoreTable from './ScoreTable';
injectTapEventPlugin();

var tabFontStyle = {fontSize: 13};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scores: [
                {name: 'Player 1', score: -1},
                {name: 'Player 2', score: -1},
                {name: 'Player 3', score: -1},
                {name: 'Player 4', score: -1}
            ]
        };
        this.handleNewScore = this.handleNewScore.bind(this);
    }

    handleNewScore(item) {
        let newState = this.state.scores;
        newState[item.player].score = item.score;
        this.setState(newState);
    }

    render () {
        let scores = this.state.scores;
        let tabarray = scores.map((item, idx) => {
            return(
                <Tab buttonStyle={tabFontStyle} label={item.name} key={idx}>
                    <div className='row'>
                        <div className='col-sm-10 col-sm-offset-1 col-xs-12'>
                            <ScoreSheet onChange={this.handleNewScore} player={idx} />
                            <div className='row center-xs'>
                                <div className='col-sm'>
                                    <ScoreTotal score = {item.score} />
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
                    <Tab label="Summary" buttonStyle={tabFontStyle}>
                        <ScoreTable scores={this.state.scores} />
                    </Tab>
                </Tabs>
            </MuiThemeProvider>
        );
    }
}

export default App;