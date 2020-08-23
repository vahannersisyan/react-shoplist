import React, { useReducer, useEffect } from 'react';

import ShopContext from './shop_context';
import shopReducer from './reducer/shop_reducer';
import actions from './reducer/actions';
import initialState from './reducer/initial_state';
import shopProviderProps from './prop-types';

const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);
  const { cartItems, shopItems } = state;
  const vatPercent = 20;

  const updateQuantity = ({ itemId, quantity }) => {
    const item = cartItems.find(({ id }) => id === itemId);

    if (item) {
      dispatch({
        type: actions.updateQuantity,
        payload: {
          item: { ...item, quantity },
        },
      });
    }
  };

  const addToCart = (itemId) => {
    const item = shopItems.find(({ id }) => id === itemId);
    const cartItem = cartItems.find(({ id }) => id === itemId);

    if (cartItem) {
      updateQuantity({ itemId: cartItem.id, quantity: cartItem.quantity + 1 });
    } else {
      dispatch({
        type: actions.addToCart,
        payload: { item },
      });
    }
  };

  const removeFromCart = (itemId) => {
    dispatch({
      type: actions.removeFromCart,
      payload: { itemId },
    });
  };

  useEffect(() => {
    let totalPrice = 0;

    cartItems.forEach(({ price, quantity }) => {
      totalPrice += price * quantity;
    });

    totalPrice = parseFloat(totalPrice);
    const vatPrice = parseFloat(totalPrice * (vatPercent / 100));
    const totalToBePaid = parseFloat(totalPrice + vatPrice).toFixed(2);

    dispatch({
      type: actions.setPrices,
      payload: {
        totalPrice: totalPrice.toFixed(2),
        vatPrice: vatPrice.toFixed(2),
        totalToBePaid,
      },
    });
  }, [JSON.stringify(cartItems), cartItems]);

  const contextValue = {
    addToCart,
    removeFromCart,
    updateQuantity,
    vatPercent,
    ...state,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

ShopProvider.propTypes = { ...shopProviderProps };

export default ShopProvider;
