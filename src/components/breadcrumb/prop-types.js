import PropTypes from 'prop-types';

export default {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
  })).isRequired,
};
