import React from 'react';
import Navigation from '../components/Navigation';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


const Edit = () => {
    return (

        <div>
            <Navigation />
            <Searchbar />
            <div className="hero">
                <div className="login-title">
                    <h1>Edit Product</h1>
                </div>
                <div className='first-name'>
                    <label >First Name *</label>
                    <input type="text" />
                </div>
                <div className="first-name">
                    <label >Last Name *</label>
                    <input type="text" />
                </div>
                <div className='first-name'>
                    <label >Shop by categories</label>
                    <input type="text" />
                </div>
                <div className="first-name">
                    <label >Description</label>
                    <input type="text" />
                </div>

                <div className="container1">
                    <div className="button-wrap">
                        <label class="button" for="upload">Upload File</label>
                        <input id="upload" type="file" />
                    </div>
                </div>
                <div className='btn-edit'>
                    <button className='btn-register'>Save</button>
                    <Link to='/product'><button className='btn-cancel'>Cancel</button></Link>
                </div>
                
            </div >
            <Footer />
        </div>

    )
}

export default Edit;