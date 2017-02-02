import React, {Component} from 'react';

class Type extends Component {
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
          <div className="panel-heading">

          <div className="row">
              <form className="col-md-12 text-center">
                  <select onChange={this.onChange.bind(this)}>
                    <option value="true">Lorem</option>
                    <option value="false">Gibberish</option>
                  </select>
                </form>
              </div>
            </div>
        )
    }
}
export default Type;
