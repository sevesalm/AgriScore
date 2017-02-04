import React from 'react';
import Slider from 'material-ui/Slider';

var labelStyle = {
    marginTop: 16,
    marginBottom: 16
};

var labelDigitStyle = {
    minWidth: '1.5em', 
    display: 'inline-block'
};

function MySlider(props) {
    return(
        <div className="row end-xs">
            <div className='col-xs-5'>
                <h6 style={labelStyle}>{props.title}: <span style={labelDigitStyle}>{props.values[props.value]}</span></h6>
            </div>
            <div className='col-xs-7'>
                <Slider step={1} value={0} min={0} max={props.values.length-1} value={props.value} onChange={props.handleChange} sliderStyle={labelStyle}/>
            </div>
        </div>
    )
}

class ScoreSlider extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: 0};
        this.handleChange = this.handleChange.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.value != this.state.value)
            return true;
        return false;
    }

    handleChange(e, value) {
        let score = -1;
        if(value > 0) {
            score = value;
        }
        this.setState({value: value});
        this.props.handleNewScore({class: this.props.class, score: score});
    }

    render() {
        return (
            <MySlider title={this.props.title} values={this.props.values} value={this.state.value} handleChange={this.handleChange}/>
        );
    }
}

class ScoreSliderB extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: 0};
        this.handleChange = this.handleChange.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.value != this.state.value)
            return true;
        return false;
    }

    handleChange(e, value) {
        let score = (this.props.offset + value) * this.props.multi;
        this.setState({value: value});
        this.props.handleNewScore({class: this.props.class, score: score});
    }

    render() {
        return (
            <MySlider title={this.props.title} values={this.props.values} value={this.state.value} handleChange={this.handleChange} />
        );
    }
}

export {ScoreSlider, ScoreSliderB};