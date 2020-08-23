import React, { useContext, Suspense } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import ShopContext from './context/shop_context';
import ShopProvider from './context/shop_provider';
import ShopList from './components/shop_list';
import ShoppingCart from './components/shopping_cart';
import BreadCrumbBar from './components/breadcrumb';
import breadcrumbItems from './constants/breadcrumb_items';

import './styles/main.css';

const App = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <Container>
      <Row>
        <BreadCrumbBar items={breadcrumbItems} />
      </Row>
      <Row>
        <Col md="12" lg="8">
          <ShopList />
        </Col>
        {
          cartItems.length > 0 && (
            <Col md="12" lg="4">
              <ShoppingCart />
            </Col>
          )
        }
      </Row>
    </Container>
  );
};

export default () => (
  <Suspense fallback="loading">
    <ShopProvider>
      <App />
    </ShopProvider>
  </Suspense>
);
