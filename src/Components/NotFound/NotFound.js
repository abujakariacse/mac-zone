import React from 'react';
import error from "../../images/404-error.png"

const NotFound = () => {
    return (
        <div className='container'>
            <img className='img-fluid height' src={error} alt="" />
        </div>
    );
};

export default NotFound;