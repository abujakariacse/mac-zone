import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='container'>
          
            <h1 className='text-center font-monospace'>Sorry, Page Not Found</h1>
            <p className='text-center font-monospace mt-4 text-secondary'>The page you are looking for doesn't exist or an other error occurred.<br/>
            Go back, or head over to maczone.com to choose a new direction</p>
        </div>
    );
};

export default NotFound;