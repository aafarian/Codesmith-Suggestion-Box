import React from 'react';
import Layout from './Layout';


export default class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      accounts: [{victoria: 'hello', will:'hello', haley: 'hello', anto: 'admin'}],
      messages: [],
      submit: [],
      msg: [],
      hasSubmitted: false,
      username: '',
      password: '',
      err: '',
      texterr: '',
      loggedIn: false,
    };
    this.changedMessage = this.changedMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.resetButton = this.resetButton.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.myAuth = this.myAuth.bind(this);
    this.logoutButton = this.logoutButton.bind(this);
  }

  componentDidMount() {
   
    console.log('componentdidmount')
    
  }

  changedMessage(event) {
    this.setState({messages: event.target.value});
  }

  submitMessage() {
    if (this.state.messages.length === 0) {
      console.log('BLANK MESSAGEEEEEE')
      this.setState({texterr: 'Unable to send blank message.'});
      return;
    }
        // console.log('componentdidmount')
    $.ajax({
      type: "post",
      dataType: 'json',
      url: "http://localhost:3000/messages",
      data: {message: this.state.messages},
    }).done(function(result){
      console.log("result:",result);
      // this.setState({messages: result});
    }.bind(this));
    

    //this.state.submit.push(this.state.messages);
    this.setState({messages: []});
    console.log('submit array now has: ', this.state.submit);
    this.setState({hasSubmitted: true});
  }

  resetButton() {
    this.setState({hasSubmitted: false});
    this.setState({texterr: ''});
    this.setState({messages: []});
  }

  usernameChange(event) {
    this.setState({username: event.target.value})
    console.log(this.state.username);
  }

  passwordChange(event) {
    console.log('changing password');
    this.setState({password: event.target.value})
  }

  myAuth() {
    if(this.state.accounts[0][this.state.username]) {
      if (this.state.accounts[0][this.state.username] === this.state.password) {
        this.setState({loggedIn: true});
        this.setState({err: ''});
        this.setState({messages: []});
        this.setState({hasSubmitted: false});
        this.setState({username: ''});
        this.setState({password: ''});
        this.setState({texterr: ''});

        console.log('valid login');
        return $.ajax({
          type: "get",
          dataType: 'json',
          url: "http://localhost:3000/login",
        }).done(function(result){
          //console.log("result:",result);
          this.setState({msg: result});
        }.bind(this));
      } else {
        this.setState({err:'Wrong Password!'});
      }

    } else {
      this.setState({err:'Account name doesn\'t exist!'});
    }
    
    this.state.username = '';
    this.state.password = '';
  }

  logoutButton() {
    this.setState({loggedIn: false});
    this.setState({messages: []});
    this.setState({hasSubmitted: false});
    this.setState({username: ''});
    this.setState({password: ''});
    this.setState({texterr: ''});

  }

  render() {
    //console.log(this.state.messages)
    return (
      <div className="home">
      
        <Layout 
        msg={this.state.msg}
        username={this.usernameChange}
        password={this.passwordChange}
        reset={this.resetButton} 
        clicked={this.state.hasSubmitted} 
        msgs={this.state.messages} 
        change={this.changedMessage} 
        submit={this.submitMessage}
        login={this.myAuth}
        loggedIn={this.state.loggedIn}
        logout={this.logoutButton}
        texterr={this.state.texterr}
        err={this.state.err}/>

        
          
      </div>
    );
  }
}