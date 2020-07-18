import React, { Component } from 'react';

import './Modal.css';

import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

  
    render () {
        return (
           <React.Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className="Modal"
                    style={{
                       
                        height:this.props.size
                    }}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}

export default Modal;