import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='container'>
      <div className="navBar">
        <Link to='/' className='logo' title='logo'><img style={{ height: 50 }} src="/img/site-logo.svg" alt="site-logo" /></Link>
        <div className="left-side">
          <ul className='nav-list'>
            <li><Link to='/login' title='login' className='nav-list-link'>Login</Link></li>
            <li>|</li>
            <li><Link to='/register' title='register' className='nav-list-link'>Register</Link></li>
          </ul>
          <button className='btn'>
            <Link to='/cart' title='cart' className='btn-link'>
              <span>10 </span>
              <img src="img/cart.svg" alt="cart" style={{ height: 22 }} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navigation;