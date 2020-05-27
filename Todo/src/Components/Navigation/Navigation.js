import React from 'react'
import classes from './Navigation.css'

const Navigations = (props) => {
    return (
        <div className={classes.Navigation} >
            <nav>
            <ul className={classes.Navigationitem}>
        <li> <a link="/">ToDo</a></li>
        <li> <a link="/">Login</a></li>
        <li> <a link="/">Signup</a></li>
        
    </ul>
    </nav>
            
        </div>
    );
};


export default Navigations;