import PropTypes from 'prop-types';

const cartItemProps = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
};

const cartItemsDefaultProps = {
  quantity: 1,
};

export { cartItemProps, cartItemsDefaultProps };
