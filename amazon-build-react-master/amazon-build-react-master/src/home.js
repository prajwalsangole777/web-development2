import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
        ></img>
        <div className="home__row">
          <Product
            key={1}
            id={1}
            title="Make Time: How to focus on what matters every day"
            price={49.99}
            rating={4}
            img="https://m.media-amazon.com/images/I/51gQ7pHF-zL.jpg"
          />
          <Product
            key={2}
            id={2}
            title="Samsung 6.0 Kg Inverter 5 Star Fully-Automatic Front Loading Washing Machine (WW60R20GLMA/TL, White)"
            price={159.99}
            rating={3}
            img="https://images-na.ssl-images-amazon.com/images/I/614-yYoVkUL._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            key={3}
            id={3}
            title="Apple iPhone 11 Pro (64GB) - Space Grey"
            price={999.99}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/I/61m6DjujESL._SL1024_.jpg"
          />
          <Product
            key={4}
            id={4}
            title="Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Silver (2nd Generation)"
            price={1299.99}
            rating={4}
            img="https://images-na.ssl-images-amazon.com/images/I/815a%2BXjrgvL._SL1500_.jpg"
          />
          <Product
            key={5}
            id={5}
            title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
            price={1899.99}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            key={6}
            id={6}
            title="LG 189 cm (75 inches) 4K UHD Smart Nano-cell TV 75SM9400PTA (Ceramic BK + Dark Steel Silver) (2019 Model)"
            price={2599.99}
            rating={3}
            img="https://images-na.ssl-images-amazon.com/images/I/A1Hw0qRh4WL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
