import React, { Component } from 'react';

import './Modal.css';

import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

  
    render () {
        const cssclass=["Modal",this.props.show?"ModalisOpen":"ModalisClosed"]
        return (
           <React.Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={cssclass.join(' ')}
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