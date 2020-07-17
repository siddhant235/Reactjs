import React, { Component } from "react";
import *  as actions from '../../../store/actions/HomePage'
import "./Signup.css";
import {connect} from 'react-redux';
import Modal from '../../UI/Modal/Modal'
class Signup extends Component {
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
  componentDidMount(){
      this.props.onGetCountryDetails();
      this.props.onGetStateDetails();
      this.props.onGetCityDetails();
     
    
  }
  render() {
    console.log(this.props.stateDetails);
      let countries=(
          this.props.countries.map(country=>{
              return(
                
                  <option>{country.countryName}</option> 
            
              )
          })
      )
      let states=(
        this.props.stateDetails.map(state=>{
            return(
              
                <option>{state.stateName}</option> 
        
            )
        })
    )
    // let cities=(
    //     this.props.city.map(citi=>{
    //         return(
    //           <select id="country"  required >
    //             <option>{citi.cityName}</option> 
    //            </select>
    //         )
    //     })
    // )
    return (
        <React.Fragment>
         {(this.state.closed&&this.props.show) && (<Modal show="true" size="500px">
      <div className="signup">
      <header>
                Signup
                <hr/>        
        <i className="fas fa-times" onClick={this.close} style={{
          position:"absolute",
          left:"25rem",
          bottom:"16rem"
          
          }}></i></header>
        <form id="form" onSubmit={this.handleSubmit}>
            
        
            <label for="text">Enter Full Name</label>
          <input id="text" type="text" required placeholder="Enter Full Name" /><br/>

          
          <label for="country">Country</label><br/>
          <select id="country"  required >
            {countries}
            </select>
          <br/>
            
          <label for="country">State</label><br/>
          <select id="country"  required >{states}</select>

            
          <br/>
            
          {/* <label for="country">City</label><br/>
            {cities} */}
          <br/>
          <button type="submit" className="Buttonsubmit1">Submit</button>
         
        </form>
       
      </div>
      </Modal>)}
     
      </React.Fragment>
    );
  }
}
const mapStateToProps=(state)=>{
    return{
      countries:state.home.countryDetails,
      stateDetails:state.home.stateDetails,
      city:state.home.cityDetails
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onGetCountryDetails:()=>dispatch(actions.getcountrydetails()),
        onGetStateDetails:()=>dispatch(actions.getstatedetails()),
        onGetCityDetails:()=>dispatch(actions.getcitydetails())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signup);
