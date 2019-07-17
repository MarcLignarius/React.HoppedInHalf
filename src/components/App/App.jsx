import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Error404 from '../Error404/Error404';
import AdminControl from '../AdminControl/AdminControl';
import BeerList from '../BeerList/BeerList';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={BeerList} />
        <Route exact path='/addbeer' component={AdminControl} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
