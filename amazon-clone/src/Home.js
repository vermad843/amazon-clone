import React from 'react';
import  './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className = "home">
           <img
             className = "home_image" 
             src  = "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/AugOffers/GW22Aug/DesktopHero_1500x600._CB407658174_.jpg" alt = ""/>
            <div className = "home__row">
               <Product
                  id = '12321341'
                  title = "AudioTechnica"
                  price = {11300}
                  rating = {3}
                  image = "AudioTechnica.jpg"
                />
                 <Product
                  id = '12321341'
                  title = "jbl flip 3"
                  price = {5500}
                  rating = {3}
                  image = "jbl.jpg"
                />
            </div>
            <div className = "home__row">
               <Product
                  id = '12321341'
                  title = "Zoom h2n"
                  price = {15000}
                  rating = {3}
                  image = "zoom.png"
                />
                 <Product
                  id = '12321341'
                  title = "The Accessory Pack"
                  price = {3500}
                  rating = {3}
                  image = "Accessory.png"
                />
                  <Product
                  id = '12321341'
                  title = "nike T-shirt"
                  price = {1000}
                  rating = {3}
                  image = "https://images-na.ssl-images-amazon.com/images/I/91iNo-IecrL._UL1500_.jpg"
                />
            </div>
            <div className = "home_row">
                 <Product
                  id = '12321341'
                  title = "Laptop"
                  price = {75000}
                  rating = {3}
                  image = "Laptop.jpg"
                />
            </div>
        </div>
    )
}

export default Home;


