import React, {Component} from 'react';

class Number extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        }, function() {
            this.props.onChange(this.state.value);
        })
    }

    render() {
        return (
            <div>
                <form>
                  <input type="number" value={this.props.value} min="1" max="10" step="1" onChange={this.onChange.bind(this)} />
                </form>
            </div>
        )
    }
}

export default Number;
