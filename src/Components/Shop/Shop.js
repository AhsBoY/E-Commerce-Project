import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb } from '../../utilities/fakedb';
import './Shop.css';
import useCart from '../../hooks/useCart';
import { NavLink } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    // products to be rendered on the UI.
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);



    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key)
        // console.log(exists)
        let newCart = []
        if(exists){
            const rest = cart.filter(pd => pd.key !== product.key)
            exists.quantity = exists.quantity + 1
            newCart = [...rest , exists]
        }
        else{
            product.quantity = 1;
             newCart = [...cart, product]
        }
        
        console.log(newCart)
        setCart(newCart);
        // save to local storage (for now)
        addToDb(product.key);

    }

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Product" />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >
                        </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <NavLink to="/orders">
                            <button className = "btn btn-regular">Review Your Order</button>
                        </NavLink>
                    </Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;