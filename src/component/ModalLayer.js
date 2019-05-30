import React from "react";
import ModalCloseButton from "./ModalCloseButton";

/**
 * 레이어
 * @param modalId
 * @param className
 * @param modalTitle
 * @param modalBody
 */
class ModalLayer extends React.Component {
    constructor(props) {
        super(props);

        this.modalClose = this.modalClose.bind(this);
        this.modalButtonEvent = this.modalButtonEvent.bind(this);
    }

    modalClose(modalId) {
        const id = modalId ? modalId : this.props.modalId;
        const modalWindow = document.getElementById(id);
        modalWindow.classList
            ? modalWindow.classList.remove("open")
            : (modalWindow.className = modalWindow.className.replace(
            new RegExp("(^|\\b)" + "open".split(" ").join("|") + "(\\b|$)", "gi"),
            " "
        ));
    }

    modalButtonEvent(buttonIndex, modalIndex) {
        this.props.modalButtonEvent(buttonIndex, modalIndex);
    }

    render() {
        // options
        const {
            width, // width
            modalId, // id
            className, // class
            title, // title
            titleClass, // title class
            hasIcon, // 경고 아이콘 표시
            buttons, // 하단 버튼(기본 닫기 제외)
            hasCloseButton, // 하단 기본 닫기 버튼
            modalIndex // modal 여러개 일 경우 index
        } = this.props;

        const widthStyle = { width: width + "px" };

        return (
            <div id={modalId} className="pop_modal">
                <div className={className} style={widthStyle}>
                    <div className="inner">
                        <strong className={titleClass} /* "fc_blue tit_popup" */>
                            {hasIcon ? <span className="ico_comm2 ico_alert" /> : <span />}
                            {title}
                        </strong>
                        {this.props.children}

                        {/* 하단 버튼 */}
                        <ModalCloseButton
                            buttons={buttons}
                            modalButtonEvent={this.modalButtonEvent}
                            hasCloseButton={hasCloseButton}
                            modalClose={this.modalClose}
                            modalIndex={modalIndex}
                        />
                    </div>
                </div>
                <div className="overlay" onClick={e => this.modalClose(`${modalId}`)} />
            </div>
        );
    }
}

ModalLayer.defaultProps = {
    titleClass: "fc_blue tit_popup"
};

export default ModalLayer;
