import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm/LoginForm';
import NewBeerForm from '../NewBeerForm/NewBeerForm';

class AdminControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      NewBeerFormVisibleOnPage: false
    };
    this.handleLoginConfirmation = this.handleLoginConfirmation.bind(this);
  }

  handleLoginConfirmation(event){
    event.preventDefault();
    this.setState({NewBeerFormVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.NewBeerFormVisibleOnPage){
      currentlyVisibleContent = <NewBeerForm/>;
      currentlyVisibleContent = <NewBeerForm onNewBeerAddition={this.props.onNewBeerAddition}/>;
    } else {
      currentlyVisibleContent = <LoginForm onLoginConfirmation={this.handleLoginConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

AdminControl.propTypes = {
  onNewBeerAddition: PropTypes.func
};

export default AdminControl;
