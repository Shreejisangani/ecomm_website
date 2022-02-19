import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Product_grid from '../components/Product_grid';
import Searchbar from '../components/Searchbar';
const ProductListing = () => {
    return (
        <>
            <Navigation />
            <Searchbar />
            <div className="container" >
                <div className="product-list">
                    <h1>Product List</h1>
                    <div className="sort-item">
                        <p>Product Name - 1435 Items</p>
                        <div className='sort-right'>
                            <label> Sort By: </label>
                            <select>
                                <option value="a-z"> a-z
                                </option>
                                <option value="Recently"> Recently
                                </option>
                                <option value="Most Popular"> Most Popular
                                </option>
                                <option value="Early"> Early
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="grid">

                        <Product_grid/>
                        <Product_grid/>
                        <Product_grid/>
                        <Product_grid/>
                        <Product_grid/>
                        <Product_grid/>
                        <Product_grid/>
                        <Product_grid/>
                       
                        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductListing;