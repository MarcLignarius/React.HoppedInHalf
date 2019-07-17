import React from 'react';
import Beer from '../Beer/Beer';
import PropTypes from 'prop-types';

function BeerList(props){
  return (
    <div>
      <h1>Beer Menu</h1>
      {props.beerList.map((beer, index) =>
        <Beer
          label={beer.label}
          name={beer.name}
          brewery={beer.brewery}
          style={beer.style}
          abv={beer.abv}
          ibu={beer.ibu}
          price={beer.price}
          pintsLeft={beer.pintsLeft}
          key={index}
        />
      )}
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array
};

export default BeerList;
