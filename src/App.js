import React, { Component } from "react";
import ModalLayer from "./component/ModalLayer";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percentage: 0
        };
        this.handleReject = this.handleReject.bind(this);
    }

    PopupOpen = () => {
        const uploading = setInterval(() => {
            this.setState({percentage : this.state.percentage + 1});
            // console.log(this.state.percentage);
            if(this.state.percentage === 100){
                this.StopInterval(uploading);
            }
        }, 10);

        return this.state = {
            percentage: 0
        };
    };
    StopInterval = (e) => {
        clearInterval(e);
    };

    handleReject() {
        finishModal("popUpload");
        this.PopupOpen();
    }

    render() {
        return (
            <div className="App">
                <button className="btn_type7" onClick={this.handleReject}>업로드</button>

                <ModalLayer
                    modalId="popUpload"
                    title="동영상 업로드 중..."
                    className="popup_type1 popup_upload"
                    hasCloseButton={false}
                    modalIndex={0}
                    width="425"
                    buttons={[
                        {
                            name: "확인",
                            class: "btn_type2"
                        },
                        {
                            name: "취소",
                            class: "btn_type3"
                        }
                    ]}
                >
                    <p className="percent"><em>{this.state.percentage}</em>%</p>
                    <span className="progress_bar">
                        <span style={{ width: this.state.percentage+"%"}}>&nbsp;</span>
                    </span>
                    <button type="button" className="btn_comm btn_close" title="닫기">닫기</button>
                </ModalLayer>
            </div>
        );
    }
}
export default App;

function finishModal(modalId) {
    if (modalId === "popUpload") {
        const modal1 = document.getElementById("popUpload");
        modal1.classNameList
            ? modal1.classNameList.add("open")
            : (modal1.className += " " + "open");
    }
}
