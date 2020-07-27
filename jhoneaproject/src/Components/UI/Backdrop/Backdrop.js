import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const cssclass=["Backdrop",props.show?"BackdropisOpen":"BackdropisClosed"]
    return <div className={cssclass.join(' ')} onClick={props.clicked}></div>
};

export default backdrop;