import React from 'react';
import Beer from '../Beer/Beer';
import oldrasputin from '../../assets/labels/oldrasputin.jpg';
import papyrusiris from '../../assets/labels/papyrusiris.jpeg';
import guavasocksandsandals from '../../assets/labels/guavasocksandsandals.png';
import tricerahops from '../../assets/labels/tricerahops.jpg';
import saisondelis from '../../assets/labels/saisondelis.jpeg';
import denimvestpionage from '../../assets/labels/denimvestpionage.jpg';

var masterBeerList = [
  {
    label: oldrasputin,
    name: 'Old Rasputin (Nitro)',
    brewery: 'North Coast Brewing Company, Fort Bragg, CA',
    style: 'Stout - Russian Imperial',
    abv: 9,
    ibu: 75,
    price: 8,
    pintsLeft: 124
  },
  {
    label: papyrusiris,
    name: 'Papyrus Iris',
    brewery: 'Ruse Brewing, Portland, OR',
    style: 'IPA - New England',
    abv: 6.5,
    ibu: 37,
    price: 7,
    pintsLeft: 124
  },
  {
    label: guavasocksandsandals,
    name: 'Guava Socks & Sandals',
    brewery: 'Stickmen Brewing Company, Lake Oswego, OR',
    style: 'IPA - New England',
    abv: 6.6,
    ibu: 37,
    price: 7,
    pintsLeft: 124
  },
  {
    label: tricerahops,
    name: 'Tricerahops',
    brewery: 'Ninkasi Brewing Company, Eugene, OR',
    style: 'IPA - Double West Coast',
    abv: 8,
    ibu: 84,
    price: 7,
    pintsLeft: 124
  },
  {
    label: saisondelis,
    name: 'Saison de Lis',
    brewery: 'Perennial, St Louis, MO',
    style: 'Farmhouse Ale - Saison',
    abv: 5,
    ibu: 20,
    price: 8,
    pintsLeft: 124
  },
  {
    label: denimvestpionage,
    name: 'Denim Vest-pionage',
    brewery: 'Baerlic, Portland, OR',
    style: 'IPA - West Coast',
    abv: 7.3,
    ibu: 62,
    price: 7,
    pintsLeft: 124
  }
];

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
