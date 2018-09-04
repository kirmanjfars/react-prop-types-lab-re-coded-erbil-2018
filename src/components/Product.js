// Code Product Component Here

import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
 
  render() {
    return (
      <div>
        
      </div>
    );
  }
}


Order.propTypes = {
  name: PropTypes.string.isRequired,
  product: PropTypes.string,
  hasWatermark: PropTypes.bool, 
  
  PropTypes.arrayOf(PropTypes.string).isRequired,
  orderInfo: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    orderedAt: PropTypes.number.isRequired 
  }).isRequired
};

Order.defaultProps = {
  hasWatermark: false
};
 




export default Order;