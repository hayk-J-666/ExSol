import React from 'react';
import './allPage.css'
import Home from './../../components/home/Home';
import AboutUs from './../../components/aboutUs/AboutUs';
import Products from './../../components/products/Products';
import TeamBoard from './../../components/teamBoard/TeamBoard';
import MediaBlog from './../../components/mediaBlog/MediaBlog';
import Partners from './../../components/partners/Partners';
import './../../App.css'

// import { Person } from "schema-dts";
// import { JsonLd } from "react-schemaorg";

// npm install schema-dts
// npm install react-schemaorg

const AllPage = (props) => {
  return (
    <>
      {/* <JsonLd<Person>
        item={{
          "@context": "http://exsol.io/aboutus",
          "@type": "Casino info",
          "name": "Casino CasinoMobile Exchange",
          "image": "data:image/jpeg;base64,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",
          "datePublished": "2019-12-10",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingCount": "5",
            "ratingValue": "4"
          }
          "author": {
            "name": "Hayk Jinanyan"
          },
        }}
      /> */}
    <div className='page' id='page'>
        <Home />
        <AboutUs />
        <Products productsItems={props.productsItems}/>
        <TeamBoard teamCards={props.teamCards} />
        <MediaBlog mediaCards={props.mediaCards} />
        <Partners />
    </div>
    </>
  );
}

export default AllPage;