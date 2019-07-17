import React from 'react';
import PropTypes from 'prop-types';
import './Beer.css';

function Beer(props) {
  return (
    <div className={'card'}>
      <img src={props.label}></img>
      <p>Name: {props.name}</p>
      <p>Brewery: {props.brewery}</p>
      <p>Style: {props.style}</p>
      <p>ABV: {props.abv}% / IBU: {props.ibu}</p>
      <p>Price: ${props.price}</p>
      <p>Pints Left: {props.pintsLeft}</p>
      <br/>
    </div>
  );
}

Beer.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  ibu: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  pintsLeft: PropTypes.number.isRequired
};

export default Beer;
