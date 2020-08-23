import React from 'react';
import { mount } from 'enzyme';
import { I18nextProvider } from 'react-i18next';
import ShopContext from '../../context/shop_context';
import ShoppingCart from './shopping_cart';
import i18n from '../../spec_support/i18n';

describe('Shopping Cart', () => {
  let component;
  const contextValue = {
    cartItems: [],
  };

  const subject = (shopContextValue = contextValue) => mount(
    <I18nextProvider i18n={i18n}>
      <ShopContext.Provider value={shopContextValue}>
        <ShoppingCart />
      </ShopContext.Provider>
    </I18nextProvider>,
  );

  describe('on render', () => {
    beforeEach(() => {
      component = subject();
    });

    it('should render div element with shopping-cart className', () => {
      expect(component.find('div.shopping-cart')).toHaveLength(1);
    });

    it('should render ShoppingCartHeader component', () => {
      expect(component.find('ShoppingCartHeader')).toHaveLength(1);
    });

    it('should render ShoppingCartFooter component', () => {
      expect(component.find('ShoppingCartFooter')).toHaveLength(1);
    });
  });

  describe('when there is no items in cartItems props', () => {
    beforeEach(() => {
      component = subject();
    });

    it('should not render div with cart-items className', () => {
      expect(component.find('div.cart-items')).toHaveLength(0);
    });

    it('should not render CartItem component', () => {
      expect(component.find('CartItem')).toHaveLength(0);
    });
  });

  describe('when there are items in cartItems props', () => {
    const id = 1;
    const title = 'title';
    const description = 'desc';
    const price = 40;
    const quantity = 1;

    beforeEach(() => {
      component = subject({
        cartItems: [{
          id,
          title,
          description,
          price,
          quantity,
        }],
      });
    });

    it('should render div with cart-items className', () => {
      expect(component.find('div.cart-items')).toHaveLength(1);
    });

    it('should render one CartItem component', () => {
      expect(component.find('CartItem')).toHaveLength(1);
    });

    it('should pass id prop to CartItem component', () => {
      expect(component.find('CartItem').prop('id')).toEqual(id);
    });

    it('should pass title prop to CartItem component', () => {
      expect(component.find('CartItem').prop('title')).toEqual(title);
    });

    it('should pass description prop to CartItem component', () => {
      expect(component.find('CartItem').prop('description')).toEqual(description);
    });

    it('should pass price prop to CartItem component', () => {
      expect(component.find('CartItem').prop('price')).toEqual(price);
    });

    it('should pass quantity prop to CartItem component', () => {
      expect(component.find('CartItem').prop('quantity')).toEqual(quantity);
    });
  });
});
