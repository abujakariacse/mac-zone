import React from 'react';
import "./Header.css"
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <h4 className="text-white">Phone Zone</h4>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <CustomLink to="/">Home</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to="/reviews">Reviews</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to="/dashboard">Dashboard</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to="/blogs">Blogs</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink to="/about">About</CustomLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;