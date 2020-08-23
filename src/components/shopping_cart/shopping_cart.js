import React, { useContext } from 'react';

import ShopContext from '../../context/shop_context';
import ShoppingCartHeader from './shopping_cart_header';
import CartItem from './cart_item';
import ShoppingCartFooter from './shopping_cart_footer';

import './styles.css';

const ShoppingCart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="shopping-cart">
      <ShoppingCartHeader />
      {
        cartItems.length > 0 && (
          <div className="cart-items">
            {
              cartItems.map(({
                id,
                title,
                description,
                price,
                quantity,
              }) => (
                <CartItem
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  price={price}
                  quantity={quantity}
                />
              ))
            }
          </div>
        )

      }
      <ShoppingCartFooter />
    </div>
  );
};

export default ShoppingCart;
