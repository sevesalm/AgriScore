import React from 'react';
import TextField from 'material-ui/TextField';

var rowStyle = {
    float: 'right',
    marginRight: '1.7em'
}

class NumberInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, value) {
        if(!isNaN(value)) {
            this.setState({value: value});
            this.props.handleNewScore({class: this.props.class, score: this.props.multi * value});
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.value != this.state.value)
            return true;
        return false;
    }

    render() {
        return(
            <div className="row middle-xs">
                <div className='col-xs-5'>
                    <h6 style={rowStyle}>{this.props.title}:</h6>
                </div>
                <div className='col-xs-7'>
                    <TextField hintText="Enter a number" value={this.state.value} onChange={this.handleChange} style={{width: "100%"}}/>
                </div>
            </div>
        );
    }
}

export default NumberInput;