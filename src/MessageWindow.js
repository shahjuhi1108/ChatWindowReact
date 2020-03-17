import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

const colors = ['#0088FE', '#00C49F'];

const MessageWindow = (props) => {
 
  return(
    <div>
    <ul className="message-list">
    {props.messages.map((message) => (
    					(props.user === message.username) ? 
 							<Message color={ colors[1] } 
    									username={message.username}
				 						text={message.text}
							/>  : 
							<Message color={ colors[0] } 
											username={message.username}
											 text={message.text}
								/>
						
    ))}
    </ul>
	</div>
  );
};

MessageWindow.propTypes = {
  user: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
};

export default MessageWindow;

