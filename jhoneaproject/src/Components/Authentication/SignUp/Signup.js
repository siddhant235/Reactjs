import React, { Component } from "react";
import *  as actions from '../../../store/actions/HomePage'
import "./Signup.css";
import {connect} from 'react-redux';
import Modal from '../../UI/Modal/Modal'
class Signup extends Component {
  constructor(props){
    super(props)
 this.state={
    closed:true,
  
    FullName:'',
    email:'',
      country:'India',
      stateName:'GUJARAT',
      city:'aaa',
      userID:''

  
  }
  this.handlechange=this.handlechange.bind(this)
  this.handleSubmit=this.handleSubmit.bind(this)
}
  close=()=>{
    this.setState({
      closed:false
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    const data=[{FullName:this.state.FullName,
                  country:this.state.country,
                  state:this.state.stateName,
                  city:this.state.city,
                  email:this.state.email
                  }]
    console.log(data);
  }
  componentDidMount(){
      this.props.onGetCountryDetails();
      this.props.onGetStateDetails();
      this.props.onGetCityDetails();
     
    
  }
  handlechange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render() {
    
      let countries=(
          this.props.countries.map(country=>{
              return(
                
                  <option name="country" value={country.countryName}>{country.countryName}</option> 
            
              )
          })
      )
      let states=(
        this.props.stateDetails.map(state=>{
            return(
              
                <option name="stateName"  value={state.stateName}>{state.stateName}</option> 
        
            )
        })
    )
   
    let cities=(
    
        this.props.city.map(citi=>{
          return(
           
              <option name="city"   value={citi.cityName}>{citi.cityName}</option> 
           
          )
      })
    )
    return (
        <React.Fragment>
          <div className="Signup">
         {(this.state.closed&&this.props.show) && (<Modal show="true" size="800px">
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
            
        
            <label htmlFor="text">Enter Full Name</label>
          <input id="text" type="text" required placeholder="Enter Full Name" name="FullName" onChange={this.handlechange}/><br/>
          <label htmlFor="text">E-mail:</label>
          <input id="text" type="email" required placeholder="Enter E-mail" name="email" onChange={this.handlechange}/><br/>

          
          <label htmlFor="country">Country</label><br/>
          <select id="country" onChange={this.handlechange} name="country" value={this.state.country}  >
            {countries}
            </select>
          <br/>
            
          <label htmlFor="country">State</label><br/>
          <select id="country"  onChange={this.handlechange} name="stateName"  value={this.state.stateName} >{states}</select>

            
          <br/>
            
          <label htmlFor="country">City</label><br/>
          <select id="country"  onChange={this.handlechange}  name="city" value={this.state.city}>{cities}</select> 
          <br/>
          <button type="submit" className="Buttonsubmit1">Submit</button>
         
        </form>
       
      </div>
      </Modal>)}
     </div>
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
