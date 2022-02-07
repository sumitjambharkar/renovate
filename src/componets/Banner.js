import React from 'react'
import './Banner.css';
import Button from '@mui/material/Button';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="banner">
            <Navbar/>
            <div className="title">
                <p>Welcome To Renovate
                We Offer 75% Cleaning</p>
                <Button style={{
                    color:'black',
                    background:"#5cfdfd",
                    width:'8rem',
                    height:'3rem',
                }}>
                   <Link to="/form">BOOK NOW</Link>
                </Button>
            </div>
            </div>
        </div>
    )
}

export default Banner;