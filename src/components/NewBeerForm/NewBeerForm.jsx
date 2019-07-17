import React from 'react';
import { Link } from 'react-router-dom';

function handleNewBeerFormSubmission(event) {
    event.preventDefault();
  }

function NewBeerForm(){
  return (
    <div>
      <h3>You are logged in.</h3>
      <form onSubmit={handleNewBeerFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>
        <br/>
        <input
          type='text'
          id='brewery'
          placeholder='Brewery'
          ref={(input) => {_brewery = input;}}/>
        <br/>
        <input
          type='text'
          id='style'
          placeholder='Style'
          ref={(input) => {_style = input;}}/>
        <br/>
        <input
          type='number'
          id='abv'
          placeholder='ABV'
          ref={(input) => {_abv = input;}}/>
        <br/>
        <input
          type='number'
          id='ibu'
          placeholder='IBU'
          ref={(input) => {_ibu = input;}}/>
        <br/>
        <input
          type='number'
          id='pintsLeft'
          placeholder='Pints Left'
          ref={(input) => {_pintsLeft = input;}}/>
        <div className={'smallSpace'}></div>
        <button className={'w3-button w3-white w3-border'} type='submit'>Add Beer</button>
        <div className={'divider'}></div>
        <Link to="/"><button className={'w3-button w3-white w3-border'}>Logout</button></Link>
      </form>
    </div>
  );
}

export default NewBeerForm;
