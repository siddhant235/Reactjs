import React,{Component} from 'react';
import './BreadCrumb.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
class breadcrumb extends Component{
  render(){
    return(
        <React.Fragment>
            <div className="wrap">
<Breadcrumb bsPrefix="braedcrumb">
  <Breadcrumb.Item   href="/" ><i className="fas fa-home"></i>Home</Breadcrumb.Item>
  <Breadcrumb.Item  href="/" active="true">
    {this.props.addrs}
  </Breadcrumb.Item>
 
</Breadcrumb>

</div>
{/* <span className="crumb-hr"><hr/></span> */}
</React.Fragment>
    )
}
}
export default breadcrumb;