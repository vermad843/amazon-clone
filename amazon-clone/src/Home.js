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
                  title = "The lean Startup"
                  price = {11.96}
                  rating = {3}
                  image = "https://images-na.ssl-images-amazon.com/images/I/91iNo-IecrL._UL1500_.jpg"
                />
                 <Product
                  id = '12321341'
                  title = "The lean Startup"
                  price = {11.96}
                  rating = {3}
                  image = "https://images-na.ssl-images-amazon.com/images/I/91iNo-IecrL._UL1500_.jpg"
                />
            </div>
            <div className = "home__row">
               <Product
                  id = '12321341'
                  title = "The lean Startup"
                  price = {11.96}
                  rating = {3}
                  image = "https://images-na.ssl-images-amazon.com/images/I/91iNo-IecrL._UL1500_.jpg"
                />
                 <Product
                  id = '12321341'
                  title = "The lean Startup"
                  price = {11.96}
                  rating = {3}
                  image = "https://images-na.ssl-images-amazon.com/images/I/91iNo-IecrL._UL1500_.jpg"
                />
                  <Product
                  id = '12321341'
                  title = "The lean Startup"
                  price = {11.96}
                  rating = {3}
                  image = "https://images-na.ssl-images-amazon.com/images/I/91iNo-IecrL._UL1500_.jpg"
                />
            </div>
            <div className = "home_row">
                 <Product
                  id = '12321341'
                  title = "The lean Startup"
                  price = {11.96}
                  rating = {3}
                  image = "https://images-na.ssl-images-amazon.com/images/I/91iNo-IecrL._UL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home;


