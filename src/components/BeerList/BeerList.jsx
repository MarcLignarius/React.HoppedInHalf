import React from 'react';
import Beer from '../Beer/Beer';
import oldrasputin from '../../assets/labels/oldrasputin.jpg';
import papyrusiris from '../../assets/labels/papyrusiris.jpeg';
import guavasocksandsandals from '../../assets/labels/guavasocksandsandals.png';
import tricerahops from '../../assets/labels/tricerahops.jpg';
import saisondelis from '../../assets/labels/saisondelis.jpeg';
import denimvestpionage from '../../assets/labels/denimvestpionage.jpg';

function BeerList(){
  return (
    <div>
      <h1>Beer Menu</h1>
      {masterBeerList.map((beer, index) =>
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

export default BeerList;
