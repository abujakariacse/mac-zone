import React from 'react';
import "./Customer.css"

const Customer = (props) => {
    const { name, description } = props.customer;
    return (
        <div className='container shadow p-3 mb-5 bg-body rounded'>
            <div className='container card'>
                <h5>Name: {name}</h5>
                <p>{description}</p>
                <p>Rating: <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star text-warning"></i>
                    <i className="fa-solid fa-star-half-stroke text-warning"></i>
                </p>
            </div>
        </div>
    );
};

export default Customer;