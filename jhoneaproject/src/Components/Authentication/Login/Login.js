import React, { Component } from "react";
import "./Login.css";
import Modal from '../../UI/Modal/Modal'
class login extends Component {
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
        <React.Fragment>
        
      <div className="login">
      <Modal>
        <form id="form" onSubmit={this.handleSubmit}>
          
            <label for="email">E-mail:</label>
          <input id="email" type="email" required /><br/>
          <label for="email">Password:</label>
          <input id="password" type="password" required /><br/>
          <button type="submit" className="Button">SignIn</button>
          
        </form>
        </Modal>
      </div>
   
     
      </React.Fragment>
    );
  }
}
export default login;
