import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import NewBeerForm from '../NewBeerForm/NewBeerForm';

class AdminControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      NewBeerFormVisibleOnPage: false
    };
    //   this.handleClick = this.handleClick.bind(this);
  }
  //
  // handleClick(){
  //   this.setState({NewBeerFormVisibleOnPage: true});
  // }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.NewBeerFormVisibleOnPage){
      currentlyVisibleContent = <NewBeerForm/>;
    } else {
      currentlyVisibleContent = <LoginForm/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default AdminControl;
