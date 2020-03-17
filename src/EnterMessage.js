import React from 'react';
import PropTypes from 'prop-types';


class EnterMessage extends React.Component {

  state = {
    username: '',
    text: '',
  };
  
  isDisabled = () => {
    return (this.state.text === '');
  };

  handleChangeText = event => {
      this.setState({text: event.target.value});
    };

  addMessage = event => {
      event.preventDefault();
      this.props.addMessage({"username": this.props.user,
       						"text": this.state.text,});
    	this.setState({text: ''});
    };

  render() {
  return(
    <div>
    <form className="input-group" onSubmit={this.addMessage}>
    <input type="text" className="form-control" 
    		placeholder="Enter your message..." 
    		value={this.state.text}
       		onChange={this.handleChangeText}/>
    <div className="input-group-append">
    <button className="btn submit-button" disabled={this.isDisabled()}>
    SEND
    </button>
    </div>
    </form>
    </div>
  );
}
}

EnterMessage.propTypes = {
  user: PropTypes.string.isRequired,
  addMessage: PropTypes.func.isRequired,
};

export default EnterMessage;