import React from 'react';
import {ScoreSlider, ScoreSliderB} from './ScoreSlider';
import RoomSelect from './RoomSelect';
import NumberInput from './NumberInput';

class ScoreSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: -1,
            pastures: -1,
            stables: 0,
            grain: -1,
            vegetables: -1,
            sheep: -1, 
            wildboar: -1, 
            cattle: -1,
            workers: 6,
            rooms: 2,
            roomtype: 0,
            empty: 0,
            bonus: 0
        };
        this.handleNewScore = this.handleNewScore.bind(this);
        this.getTotalScore = this.getTotalScore.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    handleNewScore(item) {
        let newState = {};
        newState[item.class] = item.score;
        this.setState(newState, function() {
            this.props.onChange({player: this.props.player, score: this.getTotalScore()});
        });
    }

    getTotalScore() {
        return this.state.fields + this.state.pastures + this.state.empty 
               + this.state.stables + this.state.sheep + this.state.wildboar 
               + this.state.cattle + this.state.grain + this.state.vegetables 
               + this.state.workers + this.state.rooms*this.state.roomtype + this.state.bonus;
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-sm-6 col-xs-12'>
                        <ScoreSlider handleNewScore={this.handleNewScore} title='Fields' class='fields' values={['0', '1', '2', '3', '4+']}/>
                    </div>
                    <div className='col-sm-6 col-xs-12'>
                        <ScoreSlider handleNewScore={this.handleNewScore} title='Pastures' class='pastures' values={['0', '1', '2', '3', '4+']}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6 col-xs-12'>
                        <ScoreSliderB handleNewScore={this.handleNewScore} title='Fenced stables' class='stables' offset={0} multi={1} values={['0', '1', '2', '3', '4']}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6 col-xs-12'>
                        <ScoreSlider handleNewScore={this.handleNewScore} title='Grain' class='grain' values={['0', '1-3', '4-5', '6-7', '8+']}/>
                    </div>
                    <div className='col-sm-6 col-xs-12'>
                        <ScoreSlider handleNewScore={this.handleNewScore} title='Vegetables' class='vegetables' values={['0', '1', '2', '3', '4+']}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6 col-xs-12'>
                        <ScoreSlider handleNewScore={this.handleNewScore} title='Sheep' class='sheep' values={['0', '1-3', '4-5', '6-7', '8+']}/>
                    </div>
                    <div className='col-sm-6 col-xs-12'>
                        <ScoreSlider handleNewScore={this.handleNewScore} title='Wild boar' class='wildboar' values={['0', '1-2', '3-4', '5-6', '7+']}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6 col-xs-12'>
                        <ScoreSlider handleNewScore={this.handleNewScore} title='Cattle' class='cattle' values={['0', '1', '2-3', '4-5', '6+']}/>
                    </div>
                    <div className='col-sm-6 col-xs-12'>
                        <ScoreSliderB handleNewScore={this.handleNewScore} title='Workers' class='workers' offset={2} multi={3} values={['2', '3', '4', '5']}/>
                    </div>
                </div>
                <div className='row middle-sm'>
                    <div className='col-sm-6 col-xs-12'>
                        <ScoreSliderB handleNewScore={this.handleNewScore} title='Rooms' class='rooms' offset={2} multi={1} values={['2', '3', '4', '5']}/>
                    </div>
                    <div className='col-sm-6 col-xs-12'>
                        <RoomSelect handleRoomChange={this.handleNewScore}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-6 col-xs-12'>
                        <NumberInput title='Empty fields' class='empty' multi={-1} handleNewScore={this.handleNewScore}/>
                    </div>
                    <div className='col-sm-6 col-xs-12'>
                        <NumberInput title='Bonus points' class='bonus' multi={1} handleNewScore={this.handleNewScore}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ScoreSheet;