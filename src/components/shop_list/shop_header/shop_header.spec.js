import React from 'react';
import { mount } from 'enzyme';
import { I18nextProvider } from 'react-i18next';
import ShopHeader from './shop_header';
import i18n from '../../../spec_support/i18n';

describe('ShopHeader', () => {
  let component;
  const subject = () => mount(
    <I18nextProvider i18n={i18n}>
      <ShopHeader />
    </I18nextProvider>,
  );

  beforeEach(() => {
    component = subject();
  });

  describe('header title', () => {
    it('should render h2 tag with main-color className', () => {
      expect(component.find('h2.main-color')).toHaveLength(1);
    });

    it('should have font-weight-lighter className', () => {
      expect(component.find('h2.main-color').hasClass('font-weight-lighter')).toEqual(true);
    });

    it('should have correct value', () => {
      expect(component.find('h2.main-color').text()).toEqual('shopTitle');
    });
  });

  describe('header description', () => {
    it('should render p tag with description className', () => {
      expect(component.find('p.description')).toHaveLength(1);
    });

    it('should have font-weight-lighter className', () => {
      expect(component.find('p.description').hasClass('font-weight-lighter')).toEqual(true);
    });

    it('should have correct value', () => {
      expect(component.find('p.description').text()).toEqual('shopDescription');
    });
  });

  describe('secondary title', () => {
    it('should render p tag with secondary className', () => {
      expect(component.find('p.secondary')).toHaveLength(1);
    });

    it('should have lead font-weight-normal className ', () => {
      expect(component.find('p.secondary').hasClass('font-weight-normal')).toEqual(true);
    });

    it('should have correct value', () => {
      expect(component.find('p.secondary').text()).toEqual('pleaseNoteVAT!');
    });

    it('should render span tag with dottet className', () => {
      expect(component.find('span.dotted')).toHaveLength(1);
    });
  });
});
