import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
    return(
    	<div className="message-details">
      		<li><p style={{color : props.color}}>{`${props.username}: ${props.text}`}</p></li>
		</div>
  	);
}

Message.propTypes = {
  color: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};


export default Message;
