import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Error404 from '../Error404/Error404';
import Admin from '../Admin/Admin';
import BeerList from '../BeerList/BeerList';
import NewBeerForm from '../NewBeerForm/NewBeerForm';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={BeerList} />
        <Route exact path='/admin' component={Admin} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
