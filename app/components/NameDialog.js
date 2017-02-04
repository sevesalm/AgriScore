import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const dialogStyle = {
  maxWidth: '25em'
};

export default class NameDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            value: this.props.name
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };

    handleChange(e, value) {
        this.setState({value: value});
        this.props.onChange({player: this.props.player, name: value});
    }

    render() {
        const actions = [
            <FlatButton label="Close" primary={true} keyboardFocused={true} onTouchTap={this.handleClose} />,
        ];

        return (
            <div>
                <RaisedButton label="Edit name..." onTouchTap={this.handleOpen} primary={true} />
                <Dialog title="Edit player name" actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose} contentStyle={dialogStyle}>
                    <TextField value={this.state.value} onChange={this.handleChange} id='name' />
                </Dialog>
            </div>
        );
    }
}