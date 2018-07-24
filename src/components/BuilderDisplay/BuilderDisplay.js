import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Image } from 'react-bootstrap';
import builder from '../../../assets/images/builder.png';
import buildress from '../../../assets/images/buildress.png';

function BuilderDisplay({ amount }) {
  return (
    <div className="builder-container">
      <Badge className="badge badge-warning">
        { amount }
      </Badge>
      {Array(...{ length: amount }).map((v, i) => (
        <Image src={(i % 2 === 0) ? builder : buildress} height="40px" alt={(i % 2 === 0) ? 'builder' : 'buildress'} />
      ))}
    </div>
  );
}

BuilderDisplay.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default BuilderDisplay;
