import React, {Component} from 'react';

class NumberWithButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }
    onChangeUp() {
        if (this.state.value <= 9) {
            this.setState({
                value: this.state.value += 1
            }, function() {
                this.props.onChange(this.state.value);
            })
        }
    }
    onChangeDown() {
        if (this.state.value >= 2) {

            this.setState({
                value: this.state.value -= 1
            }, function() {
                this.props.onChange(this.state.value);
            })
        }
    }
    render() {
        return (
          <div className="panel-heading numberWithButtonsbuttons">
            <div className="row text-center">
                <div className="col-sm-4">
                    <button
                      className={(this.state.value < 2) ? 'btn buttonDown disabled': 'btn buttonDown'}
                       onClick={this.onChangeDown.bind(this)}>
                       One Less Paragraph</button>
                </div>
                <div className="col-sm-4">
                  <p>There {(this.state.value > 1) ? 'are': 'is'} {this.props.value} paragraph{(this.state.value > 1) ? 's': ''}.</p>
                </div>
                <div className="col-sm-4">
                  <button
                    className={(this.state.value > 9) ? 'btn buttonUp disabled': 'btn buttonUp'}
                    onClick={this.onChangeUp.bind(this)}>
                    One More Paragraph</button>
                </div>
              </div>
            </div>
        )
    }
}

export default NumberWithButtons;
