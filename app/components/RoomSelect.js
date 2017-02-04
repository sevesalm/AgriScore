import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

var rowStyle = {
    float: 'right',
    marginRight: '1.7em'
}

class RoomSelect extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, value) {
        this.props.handleRoomChange({class: 'roomtype', score: value});
    }

    render() {
        return (
            <div className='row middle-xs'>
                <div className='col-xs-5'>
                    <h6 style={rowStyle}>Material:</h6>
                </div>
                <div className='col-xs-7'>
                    <RadioButtonGroup name="roomtype" defaultSelected="0" onChange={this.handleChange}>
                        <RadioButton value="0" label="Wood" />
                        <RadioButton value="1" label="Clay" />
                        <RadioButton value="2" label="Stone" />
                    </RadioButtonGroup>
                </div>
            </div>
        );
    }
}

export default RoomSelect;