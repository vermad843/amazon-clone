import React from 'react';
import { useStateValue} from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className = "checkout">
            <img
               className = "checkout__ad"
               src = "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/AugOffers/GW22Aug/DesktopHero_1500x600._CB407658174_.jpg"
               alt = "" 
            />
            {
                basket.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one 
                            or more items, click "Add to basket" next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className = "checkout__title">Your Shopping Basket</h2>
                        {
                            basket.map((item) => (
                                <CheckoutProduct
                                    item = {item.id}
                                    title = {item.title}
                                    image = {item.image}
                                    price = {item.price}
                                    rating = {item.rating}
                                />
                            ))
                        }
                    </div>
                )}
        </div>
    )
}

export default Checkout;