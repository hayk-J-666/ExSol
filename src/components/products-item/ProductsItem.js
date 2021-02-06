import React from 'react';
import './productsItem.css'
import './../products/products.css'
import { Link } from 'react-router-dom';

function Product_item(props) {
  return (
    <div className="card wow fadeIn" >
        <img alt='' src={props.CardImg} />
        <h1>{props.name}</h1>
  <p className="card_Text">{props.text}</p>
        <Link to={props.link}><div className='backBtn' id='productBTN' ><button className="blue_Button">READ MORE</button></div></Link>
    </div>
  );
}

export default Product_item;