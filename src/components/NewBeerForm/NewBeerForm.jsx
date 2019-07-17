import React from 'react';
import { Link } from 'react-router-dom';

function NewBeerForm(){
  return (
    <div>
      <h3>You are logged in.</h3>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Name'/>
        <br/>
        <input
          type='text'
          id='brewery'
          placeholder='Brewery'/>
        <br/>
        <input
          type='text'
          id='style'
          placeholder='Style'/>
        <br/>
        <input
          type='number'
          id='abv'
          placeholder='ABV'/>
        <br/>
        <input
          type='number'
          id='ibu'
          placeholder='IBU'/>
        <br/>
        <input
          type='number'
          id='pintsLeft'
          placeholder='Pints Left'/>
        <div className={'smallSpace'}></div>
        <button className={'w3-button w3-white w3-border'} type='submit'>Add Beer</button>
        <div className={'divider'}></div>
        <Link to="/"><button className={'w3-button w3-white w3-border'}>Logout</button></Link>
      </form>
    </div>
  );
}

export default NewBeerForm;
