import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

function NewBeerForm(props){
  let _name = null;
  let _brewery = null;
  let _style = null;
  let _abv = null;
  let _ibu = null;
  let _price = null;
  let _pintsLeft = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerAddition(
      {
        name: _name.value,
        brewery: _brewery.value,
        style: _style.value,
        abv: _abv.value,
        ibu: _ibu.value,
        price: _price.value,
        pintsLeft: _pintsLeft.value,
        id: v4()
      }
    );
    _name.value = '';
    _brewery.value = '';
    _style.value = '';
    _abv.value = '';
    _ibu.value = '';
    _price.value = '';
    _pintsLeft.value = ';';
  }

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
          step=".1"
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
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
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

NewBeerForm.propTypes = {
  onNewBeerAddition: PropTypes.func
};

export default NewBeerForm;
