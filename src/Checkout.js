import React from 'react'
import { useStateValue } from './StateProvider';
import ad_image from './imgs/benefits-of-running-ads-on-amazon-FB-OG.jpg'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
// import CurrencyFormat from 'react-currency-format';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src={ad_image} alt="" />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your shopping basket is empty, lets go and do shopping.</h2>
                    </div>
                ) : (
                    <div>
                        <h2 className='checkout__title'>Your shopping basket</h2>

                        {/* LIST OF ALL THE CHECKOUT PTODUCTS */}
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>

                )}
            </div>
            {basket.length > 0 && (
                <div className='checkout__right'>
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
