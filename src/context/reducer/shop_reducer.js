import actions from './actions';

const shopReducer = (state, action) => {
  switch (action.type) {
    case actions.addToCart: {
      const { item } = action.payload;
      const { cartItems } = state;

      return {
        ...state,
        cartItems: [
          ...cartItems,
          {
            ...item,
            quantity: 1,
          },
        ],
      };
    }
    case actions.removeFromCart: {
      let { cartItems } = state;
      const { itemId } = action.payload;

      cartItems = cartItems.filter(({ id }) => id !== itemId);

      return {
        ...state,
        cartItems,
      };
    }
    case actions.updateQuantity: {
      const { item } = action.payload;
      const { cartItems } = state;

      cartItems.find((cartItem) => {
        if (cartItem.id === item.id) {
          // eslint-disable-next-line no-param-reassign
          cartItem.quantity = item.quantity;
          return true;
        }
        return false;
      });

      return {
        ...state,
        cartItems,
      };
    }
    case actions.setPrices: {
      const { totalPrice, vatPrice, totalToBePaid } = action.payload;

      return {
        ...state,
        totalPrice,
        vatPrice,
        totalToBePaid,
      };
    }
    default: return state;
  }
};

export default shopReducer;
