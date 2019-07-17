import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Error404 from '../Error404/Error404';
import AdminControl from '../AdminControl/AdminControl';
import BeerList from '../BeerList/BeerList';
import blackbutteporter from '../../assets/labels/blackbutteporter.png';
import hophengeipa from '../../assets/labels/hophengeipa.png';
import inversionipa from '../../assets/labels/inversionipa.png';
import mirrorpondpaleale from '../../assets/labels/mirrorpondpaleale.png';
import obsidianstout from '../../assets/labels/obsidianstout.png';
import pacificwonderlandlager from '../../assets/labels/pacificwonderlandlager.png';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: [
        {
          label: blackbutteporter,
          name: 'Black Butte Porter',
          brewery: 'Deschutes Brewery',
          style: 'Porter',
          abv: 5.2,
          ibu: 30,
          price: 7,
          pintsLeft: 124
        },
        {
          label: hophengeipa,
          name: 'Hop Henge IPA',
          brewery: 'Deschutes Brewery',
          style: 'IPA',
          abv: 8.3,
          ibu: 90,
          price: 7,
          pintsLeft: 124
        },
        {
          label: inversionipa,
          name: 'Inversion IPA',
          brewery: 'Deschutes Brewery',
          style: 'IPA',
          abv: 6.3,
          ibu: 65,
          price: 7,
          pintsLeft: 124
        },
        {
          label: mirrorpondpaleale,
          name: 'Mirror Pond Pale Ale',
          brewery: 'Deschutes Brewery',
          style: 'Craft Pale Ale',
          abv: 5,
          ibu: 40,
          price: 7,
          pintsLeft: 124
        },
        {
          label: obsidianstout,
          name: 'Obsidian Stout',
          brewery: 'Deschutes Brewery',
          style: 'Stout',
          abv: 6.4,
          ibu: 55,
          price: 7,
          pintsLeft: 124
        },
        {
          label: pacificwonderlandlager,
          name: 'Pacific Wonderland Lager',
          brewery: 'Deschutes Brewery',
          style: 'Lager',
          abv: 5.5,
          ibu: 40,
          price: 7,
          pintsLeft: 124
        }
      ]
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
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
          <Route exact path='/' render={()=><BeerList beerList={this.state.masterBeerList} />} />
          <Route path='/addbeer' render={()=><AdminControl onNewBeerAddition={this.handleAddingNewBeerToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
