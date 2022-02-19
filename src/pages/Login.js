import React from 'react'
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Searchbar from '../components/Searchbar';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Navigation />
      <Searchbar />
      <div className='container'>
        <div className="hero">
          <div className="hero-title">
            <h3>Home   <img src="img/breadcrumb-arrow.svg" alt="arrow" style={{ height: 15 }} /> Login</h3>
          </div>
          <div className="login-title">
            <h1>Login or Create an Account</h1>
          </div>
          <div className="new-user">
            <h2>New Customer</h2>
            <hr />
            <p>Registration is easy and free.</p>
            <ul>
              <li>Faster Checkout</li>
              <li>Save multiple shipping addresses</li>
              <li>View and track orders and more</li>
            </ul>
            <button className='btn-loginpage'><Link to='/register' className='btn-regi-link'>Create An Account</Link> </button>
          </div>
          <div className="registered">
            <h2>Registered Customer</h2>
            <hr />
            <p>If you have an account with us, please login.</p>
            <label >Email Address *</label>
            <input type="text"/>
            <label >Password *</label>
            <input type="text"/>
            <button className='btn-loginpage'>Login</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login;