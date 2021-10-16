import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory()

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);  //// ekta mane jader key similar hobe taderke  eliminate korbe
        setCart(newCart);
        removeFromDb(key);
    }

    const handlePlaceOrder = () => {
        history.push("/shipping")
        /* setCart([]) //// ui theke data sore jabe
        clearTheCart();   */ //// clear from local storage so that it cant show again in ui
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick = {handlePlaceOrder} className= "btn-regular">Proceed To Shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;