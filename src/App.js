import React, { Component } from "react";
import PopupUploade from "./component/PopupUploade";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            percentage: 0
        };
    }
    PopupOpen = () => {
        this.setState({open: true});

        const uploading = setInterval(() => {
            this.setState({percentage : this.state.percentage + 1});
            // console.log(this.state.percentage);
            if(this.state.percentage === 100){
                clearInterval(uploading);
            }
        }, 10);

    };

    render() {
        return (
            <div className="App">
                <button className="btn_type7" onClick={this.PopupOpen}>업로드</button>
                <PopupUploade percentage={this.state.percentage} open={this.state.open}/>
            </div>
        );
    }
}

export default App;
