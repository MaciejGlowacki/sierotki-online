import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import './Sierotki.css';

class Sierotki extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            inputIsFocused: false,
            outputIsFocused: false
        };

        this._onBlur = this._onBlur.bind(this)
        this._onFocus = this._onFocus.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }
    _onBlur(val) {
        switch (val) {
            case 1 :
                this.setState({inputIsFocused: false});
                break;
            case 2 :
                this.setState({outputIsFocused: false});
                break;
        }
    }

    _onFocus(val) {
        switch (val) {
            case 1 :
                this.setState({inputIsFocused: true});
                break;
            case 2 :
                this.setState({outputIsFocused: true});
                break;
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (

            <form>
                <Paper zDepth={3}>
                    <label>
                        Your HTML code:
                        <Paper zDepth={this.state.inputIsFocused ? 5 : 2}>
                            <textarea value={this.state.value} onChange={this.handleChange}  onFocus={() => this._onFocus(1)} onBlur={() => this._onBlur(1)}/>
                        </Paper>
                    </label>
                </Paper>
                <Paper zDepth={3}>
                    <label>
                        Generated HTML code:
                        <Paper zDepth={this.state.outputIsFocused ? 5 : 2}>
                            <textarea value={this.state.value.replace(/(\s)([a-zA-Z])([\s])([a-zA-Z])([\s])+/g, "$1$2 $4&nbsp;").replace(/(\s)((["(']?)[a-zA-Z])[\s]+/g, "$1$2&nbsp;")} onFocus={() => this._onFocus(2)} onBlur={() => this._onBlur(2)}/>
                        </Paper>
                    </label>
                </Paper>
            </form>

        );
    }
}

export default Sierotki;