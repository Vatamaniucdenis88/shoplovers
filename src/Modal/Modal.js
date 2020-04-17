import React, { Component } from 'react';
import './Modal.css'

class Modal extends Component {
  render() {
  	 if(this.props.passswow === false){
          return null;
      }
    return (
      <div className="Modal">
       <p> You added {this.props.passNumberItems} items</p>
        <p> Total price: {this.props.passmodal} euro  </p>
       <button className='button-modal' onClick={this.props.passclose}> Close </button>
      </div>
    );
  }
}

export default Modal;