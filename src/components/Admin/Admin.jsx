import React from 'react';

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      adminPanelVisibleOnPage: false
    };
  }

  render(){
    return (
      <div>
        <p>This is the Admin component!</p>
      </div>
    );
  }
}

export default Admin;
