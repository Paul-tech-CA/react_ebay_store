import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import sprite from '../../icons/symbol-defs.svg';
import Overlay from './ModalStyled';
import styled from './ModalStyled';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
  }

  handleBackdropClick = evt => {
    if (evt.target.dataset?.zone) {
      this.props.onClose();
    }
  };

  handleEscape = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleBackdropClick} data-zone="overlay">
        <CSSTransition
          in={this.props.isOpen}
          appear={true}
          timeout={300}
          classNames="modal"
          unmountOnExit
        >
          <div className="Modal">
            {this.props.children}
            <button
              className="modalBtn"
              onClick={this.props.onClose}
              type="button"
            >
              <svg className="modalIcon" width="24px" height="24px">
                <use href={sprite + '#icon-cross'} />
              </svg>
            </button>
          </div>
        </CSSTransition>
      </Overlay>
    );
  }
}

export default Modal;
