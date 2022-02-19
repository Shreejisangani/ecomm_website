import React from 'react'
import Navigation from '../components/Navigation';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';

const Register = () => {
  return (
    <div>
    <Navigation />
    <Searchbar />
    <div className='container'>
      <div className="hero">
        <div className="hero-title">
          <h3>Home   <img src="img/breadcrumb-arrow.svg" alt="arrow" style={{ height: 15 }} /> Create an Account</h3>
        </div>
        <div className="login-title">
          <h1>Login or Create an Account</h1>
        </div>
        <div className='hero-personal'>
          <h2>Personal Information</h2>
          <p>Please enter the following information to create your account.</p>
        </div>
        <div className='first-name'>
          <label >First Name *</label>
          <input type="text" />
        </div>
        <div className="first-name">
          <label >Last Name *</label>
          <input type="text" />
        </div>
        <div className='email'>
          <label >Email Adress *</label>
          <input type="text" />
        </div>
        <div className='login-info'>
          <h2>Login Information</h2>
        </div>
        <div className='first-name'>
          <label >Password *</label>
          <input type="text" />
        </div>
        <div className="first-name">
          <label >Confirm Password *</label>
          <input type="text" />
        </div>
        <button className='btn-register' >Register</button>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default Register;