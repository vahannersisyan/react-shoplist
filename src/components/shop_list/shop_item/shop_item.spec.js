/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { mount } from 'enzyme';
import { I18nextProvider } from 'react-i18next';
import ShopContext from '../../../context/shop_context';
import ShopItem from './shop_item';
import i18n from '../../../spec_support/i18n';

describe('ShopItem', () => {
  let component;
  const addToCart = jest.fn();
  const id = 1;
  const title = 'title';
  const description = 'description';
  const price = 5;

  const subject = () => mount(
    <I18nextProvider i18n={i18n}>
      <ShopContext.Provider value={{ addToCart }}>
        <ShopItem {...{
          id,
          title,
          description,
          price,
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
      it('should render div element with shop-item className', () => {
        expect(component.find('div.shop-item')).toHaveLength(1);
      });

      it('should render p element with item-title className', () => {
        expect(component.find('p.item-title')).toHaveLength(1);
      });

      it('should render p element with item-description className', () => {
        expect(component.find('p.item-description')).toHaveLength(1);
      });

      it('should render button element with item-button className', () => {
        expect(component.find('button.item-button')).toHaveLength(1);
      });

      it('should render p element with item-price className', () => {
        expect(component.find('p.item-price')).toHaveLength(1);
      });
    });

    describe('should check element values', () => {
      it('should have correct value for item-title element', () => {
        expect(component.find('p.item-title').text()).toEqual(title);
      });

      it('should have correct value for item-description element', () => {
        expect(component.find('p.item-description').text()).toEqual(description);
      });

      it('should have correct value for item-button element', () => {
        expect(component.find('button.item-button').text()).toEqual('addToCart');
      });

      it('should have correct value for item-price element', () => {
        expect(component.find('p.item-price').text()).toEqual(`euroSign ${price}`);
      });
    });
  });

  describe('when clicking addToCart button', () => {
    it('should call addToCart function from shop context', () => {
      component = subject();

      const button = component.find('button.item-button');
      button.simulate('click');

      expect(addToCart).toHaveBeenCalledWith(id);
    });
  });
});
