import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from "../Header/Header";
import BeerList from "../BeerList/BeerList";
import NewBeerForm from "../NewBeerForm/NewBeerForm";

function App() {
	return (
		<div>
			<Header/>
			<Switch>
				<Route exact path='/' component={BeerList} />
				<Route exact path='/addbeer' component={NewBeerForm} />
			</Switch>
		</div>
	);
}

export default App;