import React from 'react';
import Messages from './Messages';


export default class Suggestion extends React.Component {
  render() {
      var allMsgs = [];
      for (let i=0; i<this.props.msgs.length; i++) {
          allMsgs.push(this.props.msgs[i].created_by);
      }
      if (this.props.loggedIn === true) {
        return (
          <div>
          <Messages msg={this.props.msg} logout={this.props.logout} />
          </div>  
        );

      }
      else if(this.props.clicked === false){
        return (
        <div id="container" className="app-container">
            <div id="suggestionfield" className="suggestion-field">
            <form>
            <div id="containertitle" className="container-title">What is your suggestion?</div>
            <textarea id="textbox" placeholder="Type here!" onChange={this.props.change}></textarea>
            <div id="err">{this.props.texterr}</div>
            <button type="button" id="submitbtn" onClick={this.props.submit}>Submit</button>
            </form>
            </div>
            </div>  
        );
      } else {
          return (
            <div id="container" className="app-container">
            <div id="adminfield">
              <div id="containertitle">Thank you for submitting!</div>
              <button type="button" id="resetbtn" onClick={this.props.reset}>Reset Form</button>
            </div>
            </div>  
          );

      }
  }
}