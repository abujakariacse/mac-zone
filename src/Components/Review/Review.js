import React from 'react';
import useCustomer from '../../Hook/useCustomer';
import Customer from '../Customer/Customer';

const Review = () => {
    const [customers] = useCustomer()
    return (
        <div className='mt-5'>
            <h2 className='text-center text-success'>What Our Customer Say</h2>
            <div className='container grid mt-5 mb-5'>
                {
                    customers.map(customer => <Customer key={customer.id}
                        customer={customer}></Customer>)
                }
            </div>
        </div>
    );
};

export default Review;