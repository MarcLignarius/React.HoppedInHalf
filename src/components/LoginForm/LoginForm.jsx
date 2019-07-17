import React from 'react';

function LoginForm(){
  return (
    <div>
      <h3>You are not logged in. Please login:</h3>
      <form>
        <input
          type='text'
          id='username'
          placeholder='Username'/>
        <br/>
        <input
          type='password'
          id='password'
          placeholder='Password'/>
        <div className={'smallSpace'}></div>
        <button onClick={this.handleClick} className={'w3-button w3-white w3-border'}>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
