import React from 'react';
import './products.css';
import titaleLineImg from './../../images/line.svg';
import ProductsSlider from './../productsSlider/ProductsSlider'


    function Products(props) {
        return (
            <section className="products" id='products'>
                <div className="wrapper">
                    <div className="big_product_div">
                        <div className="product_div">
                            <div className='titaleDiv  wow fadeIn' >
                                <h1 className="textShadow">Products</h1>
                                <div className='titaleLine'>
                                    <h1 className="titales">Products</h1>
                                    <img src={titaleLineImg} alt="" />
                                </div>
                            </div>
                            <p className="subtitle wow fadeIn" >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <ProductsSlider productsItems={props.productsItems} className="wow fadeIn"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

export default Products;