import React from 'react'
import './Footer.css'
import ReactTooltip from "react-tooltip";
const footer = () => {
    return (
        <React.Fragment>
            <div className="Footer">
                <div className="Follow">
                    <h3>Follow us</h3>
                    <ul>
                        <li>
                            <a href="https://facebook.com" data-tip="facebook" className="fab fa-facebook">

                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" data-tip="twitter" className="fab fa-twitter">
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com"data-tip="Instagram" className="fab fa-instagram">

                            </a>
                        </li>

                        <li>
                            <a href="https://pinterest.com" data-tip="pinterest" className="fab fa-pinterest">
                                
                            </a>
                        </li>
                        <li>
                            <a href="https://snapchat.com" data-tip="snapchat" className="fab fa-snapchat">

                            </a>
                        </li>
                    </ul>

                </div>


                <div className="Contactus">
                    <h3>Contact Us</h3>
                    <div className="icon">
                        <i className="fas fa-mobile-alt"></i>
                        <p>Phone:
                <a href="https://facebook.com">1-888-123-456-89</a>
                        </p>
                        <i className="far fa-envelope"></i>
                        <p>Email:
                <a href="https://facebook.com">support@jhonea.com</a>
                        </p>
                    </div>



                </div>
                <div className="Information">
                    <h3>Information</h3>
                    <ul>

                        <li>
                            <a href="/AboutUs">About us</a>
                        </li>
                        <li>
                            <a href="/help">Help</a>
                        </li>
                        <li>
                            <a href="/feedback">Feedback</a>
                        </li>
                        <li>
                            <a href="/terms&conditions">Terms&Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="lower">
                <hr></hr>
                <p>© 2018 Jhonea. All Rights Reserved</p>
            </div>
          <ReactTooltip/>
        </React.Fragment>


    )
}
export default footer;
