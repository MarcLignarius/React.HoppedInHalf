import React from 'react';
import PropTypes from 'prop-types';

function Error404(props){
  return (
    <div>
      <h2>Woops! The page {props.location.pathname} does not exist!</h2>
      <h3>Click Home above to go back home.</h3>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
