import React from 'react';

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      adminPanelVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({adminPanelVisibleOnPage: true});
    console.log('adminPanelVisibleOnPage is currently set to:' + this.state.adminPanelVisibleOnPage);
  }

  render(){
    return (
      <div>
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
}

export default Admin;
