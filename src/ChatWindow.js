import React from 'react';
import MessageWindow from './MessageWindow';
import EnterMessage from './EnterMessage';
import PropTypes from 'prop-types';

const ChatWindow = (props) => {
  return(
    <div className="chat-window">
    <h2>Super Awesome Chat</h2>
	<h3>{props.user}</h3>
    	<MessageWindow user={props.user} messages={props.messages}/>
		<EnterMessage user={props.user} addMessage={props.addMessage}/>
    </div>
  );
};

ChatWindow.propTypes = {
  user: PropTypes.string.isRequired,
  addMessage: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
};

export default ChatWindow;