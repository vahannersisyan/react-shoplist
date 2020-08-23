import React from 'react';
import shopItems from './reducer/shop_items';

const ShopContext = React.createContext({
  addToCart: () => {},
  removeFromCart: () => {},
  cartItems: [],
  shopItems,
});

export default ShopContext;
