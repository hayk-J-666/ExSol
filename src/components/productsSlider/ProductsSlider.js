import React from 'react';
import './productsSlider.css'
import Product_item from './../products-item/ProductsItem'

import OWLcorusel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'


const options = {
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      650: {
          items: 2,
      },
      1000: {
          items: 3,

      }
  },
};



function ProductsSlider(props) {
    let ProductsElement = props.productsItems.map((products, index) => <Product_item name={products.name} text={products.text} link={products.link} key={index} CardImg={products.Cardimg}/>)
  return (
    <section className='productsSlider'>
      <OWLcorusel  items='3' autoplay autoplayHoverPause dots loop responsive={options.responsive} >
        {ProductsElement}
      </OWLcorusel>
    </section>
  );
}

export default ProductsSlider;
