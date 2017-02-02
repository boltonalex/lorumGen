import React, {Component} from 'react';

class Refresh extends Component {
    constructor(props) {
        super(props);
    }

    // onClick(e) {
    //     this.props.getText;
    // }

    render() {
        return (
            <div className="panel-heading">
                <div className="row text-center">
                    <div className="col-sm-12 text-center">
                        <button className="btn" onClick={this.props.onClick.bind(this)}>Refresh</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Refresh;
