import React from 'react';
import "./Home.css"
import Bike from "../../images/banner.png"
import useCustomer from '../../Hook/useCustomer';
import Customer from '../Customer/Customer';
import CustomLink from '../CustomLink/CustomLink';

const Home = () => {
    const [customers] = useCustomer()
    return (
        <div className='container'>
            <div className="row align-items-center">
                <div className="col-lg-6 margin">
                    <h1 className='size'>Your Next Phone</h1>
                    <h1 className='size text-success'>Your best Phone</h1>
                    <p>Motorcycle design varies greatly to suit a range of different purposes: long-distance travel, commuting, cruising, sport (including racing), and off-road riding.</p>
                    <button className='btn-success border-0 p-2 rounded'>Live Demo</button>
                </div>
                <div className="col-lg-6 margin">
                    <img className='img-fluid' src={Bike} alt="" />
                </div>
            </div>
            <div className='container mt-5'>
                <h2 className='text-center text-success'>Customer Reviews - 3</h2>
            </div>
            <div className="container mt-5 grid">
                {
                    customers.slice(0, 3).map(customer => <Customer
                        key={customer.id}
                        customer={customer}
                    ></Customer>)
                }
            </div>
            <div className='d-flex justify-content-center mt-2 mb-5'>
                <CustomLink to="/reviews" className="btn-success p-2 rounded">Show All Cart</CustomLink>
            </div>
        </div>
    );
};

export default Home;