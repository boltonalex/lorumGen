import React, {Component} from 'react';
import Outputs from './Outputs';
import Title from './Title'
import Type from './Inputs/Type';
import Refresh from './Refresh';
import NumberWithButtons from './Inputs/NumberWithButtons';
// import Number from './Inputs/Number';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paras: 4,
            lorem: true,
            text: ''
        }
    }

    componentWillMount() {
        this.getText();
    }

    changeType(value) {
        this.setState({
            lorem: value
        }, this.getText);
    }

    changeNumber(value) {
        this.setState({
            paras: value
        }, this.getText);
    }

    getText() {
        axios.get('http://www.randomtext.me/api/lorem=/' + (this.state.lorem ? "lorem" : "giberish") + '/p-' + this.state.paras).then((response) => {
            this.setState({text: response.data.text_out});
        }).catch((err) => {
            console.log(err);
        });
    }

    simpleRefresh(){
      this.getText();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="panel panel-default">
                    <Title/>
                    <NumberWithButtons value={this.state.paras} onChange={this.changeNumber.bind(this)}/>
                    <Type value={this.state.lorem} onChange={this.changeType.bind(this)}/>
                    <Refresh onClick={this.simpleRefresh.bind(this)}/>
                    <Outputs value={this.state.text}/>
                </div>
            </div>
        )
    }
}

export default App;
