import React, { Component,Suspense } from "react";
import Card from '../../Components/UI/Cards/Cardsimilarproducts/Cardsimilarproducts'
import Menu from "../../Components/UI/MegaMenu/MegaMenu";
import Footer from "../../Components/UI/Footer/Footer";
import MultiCarousel from '../../Components/UI/MultiCarouselsimilar/MultiCarouselsimilar'
import Review from "../../Components/UI/Reviews/Reviews";
import { connect } from "react-redux";
import * as actionCreator from '../../store/actions/productDetails'
import * as Cartaction from '../../store/actions/Cart'
import Crumb from "../../Components/UI/BreadCrumb/BreadCrumb";
import { NavLink } from "react-router-dom";
import Delieveryimg from "../../assets/images/delivery_icon.png";
import "./ProductDetail.css";
import ReactTooltip from "react-tooltip";
const ReactImageMagnify=React.lazy(()=>import('react-image-magnify'))
class productDetail extends Component {
  constructor(props)
  { super(props);
  this.state = {
    val:null,
    text:null,
    description: true,
    reviews: false,
    prods:[{
    name:'hi',
    quantity:'hello',
    image:'by',
    price:'pi',
    productID:'0'}]
  
    
  }
  this.handleinput=this.handleinput.bind(this)
}
  
  componentDidMount() {
    window.scrollTo(0, 0);
    
   this.props.onGetproductDetails();
   this.props.onGetSimilarProducts();
  //  this.props.onSendALLProducts();
  
  }
  componentWillUnmount(){
    this.props.onGetproductDetails();
    this.props.onGetSimilarProducts();
  }

  descriptions = () => {
    this.setState({
      reviews: false,
      description: true,
    });
  };
 
  reviews = () => {
    this.setState({
      reviews: true,
      description: false,
    });
  };
  handleinput(event)
  { 
    let arr1=this.props.similarProductDetails.concat(this.props.productDetails)
    var clean = arr1.filter((arr1, index, self) =>
    index === self.findIndex((t) => (t.productID === arr1.productID)))
    clean.filter(item=>item.productID===this.props.match.params.id).map(data=>{
  
      this.setState({
       
        prods:[{productID:data.productID,
              image:data.productImage,
               price:data.productPrice,
              name:data.productName,
              [event.target.name]:event.target.value,
            }]
      })})
     
 
  }
  handleAddtoCart=()=>{
 

this.props.onSendALLProducts(this.state.prods)

  
  }
  render() {
  
    let arr1=this.props.similarProductDetails.concat(this.props.productDetails)
    var clean = arr1.filter((arr1, index, self) =>
    index === self.findIndex((t) => (t.productID === arr1.productID)))
    
    let breadCrumb=(
            
     clean.filter(item=>item.productID===this.props.match.params.id).map(data=>{
      
      return(
        <div className="product-crumb" key={data.productID}>
          <Crumb addrs={data.productName} />
        </div>
      )
      
      })
    )
 
    
      
    
    let details=<div>LOADING...</div>
    if(!this.props.productloading)
    {
     details=(
     clean.filter(item=>item.productID===this.props.match.params.id).map(data=>{

       
        return(
          <div key={data.productID}>
          <div className="container2">
            <Suspense fallback={<div>LOADING...</div>}>
          <ReactImageMagnify
            enlargedImagePosition={"over"}
            {...{
              smallImage: {
                alt: "Button",

                width: 250,
                height: 300,
                src: `http://13.235.251.42/grocery/backend/web/uploads/products/${data.productImage}`,
              },
              largeImage: {
                src: `http://13.235.251.42/grocery/backend/web/uploads/products/${data.productImage}`,
                width: 1000,
                height: 1200,
              },
            }}
          />
          </Suspense>
          <span className="product-text">
          <h1 style={{fontSize:"22px"}}>{data.productName}</h1>
            <p>{data.productReviewCount} Reviews</p>
            <span className="price">
              <h3 >
                <i className="fas fa-rupee-sign"></i>
                {data.productPrice}
              </h3>

          
            </span>
            <section className="field">
              <img src={Delieveryimg} alt="Delivery-icon" />
              <span className="delivery-arrow">
                <a href="/delivery">
                  <i className="fa fa-angle-right"></i>
                </a>
              </span>
              <p>
                Delivery charges:
                <br />
                <span style={{ fontSize: "30px" }}>
                  <i
                    className="fas fa-rupee-sign"
                    style={{ color: "black" }}
                  ></i>
                  10
                </span>
                <br />
                <span style={{ color: "#777" }}>
                  Get free delivery on orders more than
                  <i
                    className="fas fa-rupee-sign"
                    style={{
                      color: "#777",
                      fontSize: "15px",
                      marginLeft: "10px",
                    }}
                  ></i>
                  1000
                </span>
              </p>
            </section>
           
            <input type="number" min="0" defaultValue="0"  name="quantity" onChange={this.handleinput} />
            <NavLink to="/checkout" exact className="checkout-button">
              Buy Now
            </NavLink>
            <button    className="mycart-button" onClick={this.handleAddtoCart}>
              Add to Cart
            </button>
        
          </span>
          <span className="wish">
            <a href="/product" data-tip="Add to Wishlist">
              <i className="far fa-heart"></i> Add to Wishlist
            </a>
          </span>
          <span className="description">
            <hr />

            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.productDescription,
                }}
              ></div>
            </div>

            <hr />
          </span>
          <div className="social-icons">
            <strong>
              <p>Share this product</p>
            </strong>
            <ul>
              <li>
                <a
                  className="facebook social-icon"
                  href="https://facebook.com"
                >
                  <i className="fab fa-facebook-f" data-tip="facebook"></i>
                </a>
              </li>
              <li>
                <a
                  className="twitter social-icon"
                  href="https://twitter.com"
                  title="Twitter"
                >
                  <i
                    data-tip="twitter"
                    style={{ background: "none" }}
                    className="fab fa-twitter"
                  ></i>
                </a>
              </li>
              <li>
                <a
                  className="pinterest social-icon"
                  href="https://pinterest.com"
                >
                  <i
                    data-tip="pinterest"
                    style={{ background: "none" }}
                    className="fab fa-pinterest"
                  ></i>
                </a>
              </li>
              <li>
                <a
                  className="gplus social-icon"
                  href="https://google-plus.com"
                >
                  <i
                    data-tip="google-plus"
                    className="fab fa-google-plus"
                  ></i>
                </a>
              </li>
              <li>
                <a
                  className="linkedin social-icon"
                  href="https://linkedin.com"
                >
                  <i data-tip="Linkedin" className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <ReactTooltip />
        </div>
        <div className="description-review">
          <p onClick={this.descriptions}>Description</p>
          <p onClick={this.reviews}>Reviews</p>
        </div>
        <div className="container3">
          {this.state.description && (
            <div className="description-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              fringilla augue nec est tristique auctor. Donec non est at
              libero vulputate rutrum. Morbi ornare lectus quis justo gravida
              semper. Nulla tellus mi, vulputate adipiscing cursus eu,
              suscipit id nulla. Pellentesque aliquet, sem eget laoreet
              ultrices, ipsum metus feugiat sem, quis fermentum turpis eros
              eget velit. Donec ac tempus ante. Fusce ultricies massa massa.
              Fusce aliquam, purus eget sagittis vulputate, sapien libero
              hendrerit est, sed commodo augue nisi non neque. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem
              et placerat vestibulum, metus nisi posuere nisl, in accumsan
              elit odio quis mi. Cras neque metus, consequat et blandit et,
              luctus a nunc. Etiam gravida vehicula tellus, in imperdiet
              ligula euismod eget.
            </div>
          )}

          {this.state.reviews && <Review />}
        </div>
        </div>
        )
      })
    )}
  let simialrproducts=(
    this.props.similarProductDetails.map(product=>{
      return(
        <div key={product.productID}>
           <Card
              image={`http://13.235.251.42/grocery/backend/web/uploads/products/${product.productImage}`}
              title={product.productStock}
              text={product.productName}
              link={product.link}
              id={product.productID}
              price={product.productPrice}
              description={product.productDescription}
              review={product.productReviewCount}
            />
        </div>
      )
    })
  )
  
  console.log(this.props.carts);
    return (
      <React.Fragment>
        <div className="wraping">
          <Menu />
        </div>
       {breadCrumb}
       
        <div className="container1">
         {details}
        
        </div>
        <MultiCarousel
              happening={simialrproducts}
              name="Similar Products"
              offset={350}
              itemWidth={200}
              slidesPerPage={3.5}
              slidesPerScroll={1}
            />
           
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productDetails: state.product.productDetails,
    similarProductDetails:state.product.similarProducts,
    productloading:state.product.productloading,
    carts:state.cart.allproducts
  };
};
const mapDispatchToProps=(dispatch)=>{
  return{
    onGetproductDetails:()=>dispatch(actionCreator.getproductdetails()),
    onGetSimilarProducts:()=>dispatch(actionCreator.getSimilarProductdetails()),
    onSendALLProducts:(products)=>dispatch(Cartaction.allproducts(products))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(productDetail);
