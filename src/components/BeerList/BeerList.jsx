import React from 'react';
import Beer from '../Beer/Beer';
import PropTypes from 'prop-types';
import './BeerList.css'

function BeerList(props){
  return (
    <div>
      <h1 className={'title'}>Beer Menu</h1>
      <div className={'wrapper'}>
      {props.beerList.map((beer) =>
        <Beer
          label={beer.label}
          name={beer.name}
          brewery={beer.brewery}
          style={beer.style}
          abv={beer.abv}
          ibu={beer.ibu}
          price={beer.price}
          pintsLeft={beer.pintsLeft}
          key={beer.id}
        />
      )}
      </div>
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array
};

export default BeerList;
