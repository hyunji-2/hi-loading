import React from "react";

/**
 * 모달 하단 버튼
 * @param buttons
 * @param modalButtonEvent
 * @param hasCloseButton : 기본 닫기 버튼 유무
 * @param modalClose
 * @param modalIndex
 */
class ModalCloseButton extends React.Component {
  constructor(props) {
    super(props);

    this.modalClose = this.modalClose.bind(this);
    this.modalButtonEvent = this.modalButtonEvent.bind(this);
  }

  modalClose() {
    this.props.modalClose(this.props.modalId);
  }

  modalButtonEvent(e) {
    const buttonindex = e.target.getAttribute("data-buttonindex");
    const { modalIndex } = this.props;
    this.props.modalButtonEvent(Number(buttonindex), Number(modalIndex));
  }

  render() {
    const { buttons, hasCloseButton } = this.props;

    return (
      <div className="btns">
        {buttons.map((v, i) => (
          <button
            key={i}
            type="button"
            data-buttonindex={i}
            className={v.class}
            onClick={this.modalButtonEvent}
          >
            {v.name}
          </button>
        ))}
        {hasCloseButton ? (
          <button type="button" className="btn_type4" onClick={this.modalClose}>
            닫기
          </button>
        ) : (
          <span />
        )}
      </div>
    );
  }
}

ModalCloseButton.defaultProps = {
  buttons: [],
  hasCloseButton: false
};

export default ModalCloseButton;
