import React from 'react';

/**
 * modal open button
 */
class ModalButton extends React.Component {
  constructor(props) {
    super(props);

    this.modalOpen = this.modalOpen.bind(this);
  }

  modalOpen(modalId) {
    const modalWindow = document.getElementById(modalId);
    modalWindow.classList
      ? modalWindow.classList.add("open")
      : (modalWindow.className += " " + "open");
  }

  render() {
    const { className, modalId, text } = this.props;
    return (
      <Link
        to="#"
        className={className}
        onClick={e => this.modalOpen(`${modalId}`)}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: text
          }}
        />
      </Link>
    );
  }
}

export default ModalButton;
