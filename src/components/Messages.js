import React from 'react';


export default class Messages extends React.Component {
  render() {

      let allMsgs = [];
      let curr = '';
      for (let i=this.props.msg.length-1; i>=0; i--) {
          if (this.props.msg[i] === '') {
              this.props.msg[i].message = '[blank message]';
          }
          if (i%2 === 0) {
            allMsgs.push(<div id="printedmsg" className="printed-msg">{this.props.msg[i].message}</div>)
            curr = this.props.msg[i].message;
          } else {
            allMsgs.push(<div id="printedmsg2" className="printed-msg">{this.props.msg[i].message}</div>)
            curr = this.props.msg[i].message;  
          }
      }
      return (
      <div id="container" className="app-container">
            <div id="suggestionfield" className="suggestion-field">
          
            <div id="containertitle" className="container-title">Thank you for logging in! List of suggestions:</div>
            <div id="messagesbox">{allMsgs}</div>
            <button id="logoutbtn" onClick={this.props.logout}>Logout</button>
            
            </div>
            </div>
      );
  }
}