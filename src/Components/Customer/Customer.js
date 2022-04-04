import React from 'react';
import "./Customer.css"

const Customer = (props) => {
    const { name, description } = props.customer;
    return (
        <div className='container shadow p-3 mb-5 bg-body rounded'>
            <div className='container card'>
                <h5>Name: {name}</h5>
                <p><span className='fs-6 text-secondary fw-bold'>Comment:</span> {description}</p>
                <p>Ratings: <i className="fa-solid fa-star text-warning"></i>
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