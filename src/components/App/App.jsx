import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Error404 from '../Error404/Error404';
import AdminControl from '../AdminControl/AdminControl';
import BeerList from '../BeerList/BeerList';
import oldrasputin from '../../assets/labels/oldrasputin.jpg';
import papyrusiris from '../../assets/labels/papyrusiris.jpeg';
import guavasocksandsandals from '../../assets/labels/guavasocksandsandals.png';
import tricerahops from '../../assets/labels/tricerahops.jpg';
import saisondelis from '../../assets/labels/saisondelis.jpeg';
import denimvestpionage from '../../assets/labels/denimvestpionage.jpg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: [
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
      ]
    };
  }

  handleAddingNewBeerToList(newBeer){
    var newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList.push(newBeer);
    this.setState({masterBeerList: newMasterBeerList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={BeerList} />
          <Route exact path='/addbeer' component={AdminControl} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  };
}

export default App;
