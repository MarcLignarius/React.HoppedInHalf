import React from 'react';
import Beer from '../Beer/Beer';

function BeerList(){
  return (
    <Beer
      name='Tricerahops'
      brewery='Ninkasi Brewing Company, Eugene, OR'
      style='IPA - Double West Coast'
      abv={8}
      ibu={84}
      price={7}
      pintsLeft={124}/>
  );
}

export default BeerList;