import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { mount } from 'enzyme';
import ShopContext from '../../../context/shop_context';
import CartItem from './cart_item';
import i18n from '../../../spec_support/i18n';

describe('Cart Item', () => {
  let component;
  const removeFromCart = jest.fn();
  const id = 1;
  const title = 'title';
  const description = 'description';
  const price = 5;
  const quantity = 1;

  const subject = () => mount(
    <I18nextProvider i18n={i18n}>
      <ShopContext.Provider value={{ removeFromCart }}>
        <CartItem {...{
          id,
          title,
          description,
          price,
          quantity,
        }}
        />
      </ShopContext.Provider>
    </I18nextProvider>,
  );

  describe('on render', () => {
    beforeEach(() => {
      component = subject();
    });

    describe('should have correct elements', () => {
      it('should render div element with cart-item className', () => {
        expect(component.find('div.cart-item')).toHaveLength(1);
      });

      it('should render p element with cart-item-title className', () => {
        expect(component.find('p.cart-item-title')).toHaveLength(1);
      });

      it('should render p element with cart-item-description className', () => {
        expect(component.find('p.cart-item-description')).toHaveLength(1);
      });

      it('should render button element with remove-button className', () => {
        expect(component.find('button.remove-button')).toHaveLength(1);
      });

      it('should render p element with cart-item-price className', () => {
        expect(component.find('span.cart-item-price')).toHaveLength(1);
      });

      it('should render Quantity comonent', () => {
        expect(component.find('Quantity')).toHaveLength(1);
      });
    });

    describe('should check element values', () => {
      it('should have correct value for cart-item-title element', () => {
        expect(component.find('p.cart-item-title').text()).toEqual(title);
      });

      it('should have correct value for cart-item-description element', () => {
        expect(component.find('p.cart-item-description').text()).toEqual(description);
      });

      it('should have correct value for remove-button element', () => {
        expect(component.find('button.remove-button').text()).toEqual('remove');
      });

      it('should have correct value for cart-item-price element', () => {
        expect(component.find('span.cart-item-price').text()).toEqual(`euroSign${price}`);
      });
    });

    describe('Quantity component', () => {
      let quantityComponent;

      beforeEach(() => {
        quantityComponent = component.find('Quantity');
      });

      it('should pass quantity value to component', () => {
        expect(quantityComponent.prop('quantity')).toEqual(quantity);
      });

      it('should pass itemId value to component', () => {
        expect(quantityComponent.prop('itemId')).toEqual(id);
      });
    });
  });

  describe('when clicking remove button', () => {
    it('should call removeFromCart function from shop context', () => {
      component = subject();

      const button = component.find('button.remove-button');
      button.simulate('click');

      expect(removeFromCart).toHaveBeenCalledWith(id);
    });
  });
});
