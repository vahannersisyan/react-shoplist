import React from 'react';
import { mount } from 'enzyme';
import { I18nextProvider } from 'react-i18next';
import ShoppingCartHeader from './shopping_cart_header';
import i18n from '../../../spec_support/i18n';

describe('ShoppingCartHeader', () => {
  let component;
  const subject = () => mount(
    <I18nextProvider i18n={i18n}>
      <ShoppingCartHeader />
    </I18nextProvider>,
  );

  beforeEach(() => {
    component = subject();
  });

  it('shoud have div element with cart-header className', () => {
    expect(component.find('div.cart-header')).toHaveLength(1);
  });

  it('shoud have hr element with dotted className', () => {
    expect(component.find('hr.dotted')).toHaveLength(1);
  });

  describe('heder title', () => {
    let h2Tag;

    beforeEach(() => {
      h2Tag = component.find('h2.main-color');
    });

    it('should render h2 tag with main-color className', () => {
      expect(h2Tag).toHaveLength(1);
    });

    it('should render h2 tag with correct value', () => {
      expect(h2Tag.text()).toEqual('boatShoppingCart');
    });
  });

  describe('header items', () => {
    let headerItems;

    beforeEach(() => {
      headerItems = component.find('span.main-color');
    });

    it('should render 3 header-item span tags', () => {
      expect(headerItems).toHaveLength(3);
    });

    it('should have product title for first element', () => {
      expect(headerItems.at(0).text()).toEqual('product');
    });

    it('should have price title for second element', () => {
      expect(headerItems.at(1).text()).toEqual('price');
    });

    it('should have quantity title for first element', () => {
      expect(headerItems.at(2).text()).toEqual('quantity');
    });
  });
});
