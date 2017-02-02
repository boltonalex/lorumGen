import React, {Component} from 'react';

class Outputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }
    render() {
        return (
          <div className="panel-body">

            <div className="row output">
                <div className="col-md-12" id="outputContent">
                        {this.props.value}
                </div>
              </div>
            </div>
        )
    }
}

export default Outputs;
