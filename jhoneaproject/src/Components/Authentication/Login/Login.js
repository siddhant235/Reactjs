import React, { Component } from "react";
import "./Login.css";
import Modal from '../../UI/Modal/Modal'
class login extends Component {
  state={
    closed:true
  }
  close=()=>{
    this.setState({
      closed:false
    })
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
        <React.Fragment>
         {(this.state.closed&&this.props.show) && (<Modal show>
      <div className="login"  >
     
        <form id="form" onSubmit={this.handleSubmit} >
        <i class="fas fa-times" onClick={this.close} style={{
          position:"absolute",
          left:"22rem"}}></i>
            <label for="number">Mobile Number</label>
          <input id="number" type="text" pattern="[0-9]+" required /><br/>
          
          <label for="pasword">Password:</label>
          <input id="password" type="password" required /><br/>
          <button type="submit" className="Buttonsubmit">SignIn</button>
         
        </form>
       
      </div>
      </Modal>)}
     
      </React.Fragment>
    );
  }
}
export default login;
