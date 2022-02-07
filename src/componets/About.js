import React from 'react';
import Header from './Header';
import Navbar from './Navbar'

const About = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <div className='text-center m-4'>
            <h1 className='text-5xl font-bold m-4 my-8'>WHO WE ARE</h1>
            <h2 className='text-3xl font-bold m-4 text-red-700 my-8'> Cleannation.in (clean-nation) company is a professional All service provide in all over india 
            with low Cost.The customer is the king and we are the servant</h2>
           
           <p className='text-5xl font-bold m-4 my-8'> Our Service</p>
            <p className='text-2xl m-4 my-8'>House Cleaning & Shifting</p>
            <p className='text-2xl m-4 my-8'>Car Cleaning & Dusting</p>
           <p className='text-2xl m-4 my-8'> Chendeliers Cleaning & fiting</p>
            <p className='text-2xl m-4 my-8'>HouseKeeping Contract</p>
            <p className='text-2xl m-4 my-8'>Office & Home Shifting</p>

            <p className='text-2xl font-bold m-4 my-8'>Coming Soon Services</p>

           <p className='text-2xl font-bold m-4 my-8'> Thank You</p>

            </div>
            
        </div>
    )
}

export default About
