import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function DefaultButton({ children, handleClick }) {
  return (
    <Button bsStyle="warning" onClick={handleClick}>
      { children }
    </Button>
  );
}

DefaultButton.propTypes = {
  children: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

DefaultButton.defaultProps = {
  children: 'Click Me!',
};

export default DefaultButton;
