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
            <div className="row align-items-center justify-content-between g-5">
                <div className="col-lg-6">
                    <h1 className='heading font-monospace text-secondary'>Your Next Phone</h1>
                    <h1 className='heading text-success font-monospace'>Your best Phone</h1>
                    <p className='font-monospace'>The phone which is powered by the new Apple A15 Bionic processor comes with a 6.7 inch Super Retina XDR OLED capacitive touchscreen and 2778 x 1284 pixels resolution.It features True Tone and a Wide color gamut. The display screen is protected by a Scratch-resistant ceramic glass, oleophobic coating, and features 120Hz, HDR10, Dolby Vision, 1000 nits (typ), and 1200 nits (peak).</p>
                    <button className='btn-success border-0 p-2 rounded'>Live Demo</button>
                </div>
                <div className="col-lg-6">
                    <img className='img-fluid' src={Bike} alt="" />
                </div>
            </div>
            <div className='container mt-3'>
                <h2 className='text-center text-success'>Customer Reviews</h2>
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
                <CustomLink to="/reviews" className="btn-success p-2 rounded">More Reviews</CustomLink>
            </div>
        </div>
    );
};

export default Home;