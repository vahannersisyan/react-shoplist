import actions from './actions';
import ShopReducer from './shop_reducer';
import initialState from './initial_state';

describe('Shop Reducer', () => {
  const subject = (action, state = initialState) => ShopReducer(state, action);

  const createActionObject = (type, payload) => ({
    type,
    payload,
  });

  describe('default case', () => {
    it('does not do any changes with state and returns initial state', () => {
      expect(subject({})).toEqual(initialState);
    });
  });

  describe('removeFromCart', () => {
    describe('when cartItems are empty', () => {
      it('should return empty cartItems', () => {
        expect(subject({})).toEqual(initialState);
      });
    });

    describe('when cartItems are not empty', () => {
      const cartItems = [
        { id: 1, title: 'test title 1' },
        { id: 5, test: 'test title 5' },
      ];

      const newState = {
        ...initialState,
        cartItems,
      };

      describe('when there is not cartItem with provided id', () => {
        it('should return state with initial cartItems', () => {
          const action = createActionObject(
            actions.removeFromCart, { itemId: 2 },
          );

          expect(subject(action, newState)).toEqual(newState);
        });
      });

      describe('when there is cartItem with provided id', () => {
        it('should return state with initial cartItems', () => {
          const action = createActionObject(
            actions.removeFromCart, { itemId: 5 },
          );

          const filteredCartItems = cartItems.filter(({ id }) => id !== 5);

          expect(subject(action, newState)).toEqual({
            ...newState,
            cartItems: filteredCartItems,
          });
        });
      });
    });
  });

  describe('addToCart', () => {
    it('adds item to cartItems array with quantity 1', () => {
      const item = {
        id: 1,
        title: 'title 1',
      };

      const action = createActionObject(
        actions.addToCart, { item },
      );

      expect(subject(action)).toEqual({
        ...initialState,
        cartItems: [{
          ...item,
          quantity: 1,
        }],
      });
    });
  });

  describe('updateQuantity', () => {
    const item = {
      id: 1,
      quantity: 5,
    };

    const action = createActionObject(
      actions.updateQuantity, { item },
    );

    describe('when there is item with provided data', () => {
      it('should update quantity of provided item', () => {
        let cartItems = [
          { id: 1, quantity: 2 },
          { id: 2, quantity: 3 },
        ];

        const state = {
          ...initialState,
          cartItems,
        };

        cartItems = cartItems.filter(({ id }) => id !== item.id);

        expect(subject(action, state)).toEqual({
          ...state,
          cartItems: [
            item,
            ...cartItems,
          ],
        });
      });
    });

    describe('when there is no item with provided data', () => {
      it('should return same state', () => {
        const cartItems = [
          { id: 2, quantity: 2 },
          { id: 3, quantity: 3 },
        ];

        const state = {
          ...initialState,
          cartItems,
        };

        expect(subject(action, state)).toEqual(state);
      });
    });
  });

  describe('updatePrices', () => {
    const totalPrice = 10;
    const vatPrice = 2;

    const action = createActionObject(
      actions.setPrices, {
        totalPrice,
        vatPrice,
        totalToBePaid: totalPrice - vatPrice,
      },
    );

    const updatedState = {
      ...initialState,
      totalPrice,
      vatPrice,
      totalToBePaid: totalPrice - vatPrice,
    };

    expect(subject(action)).toEqual(updatedState);
  });
});
