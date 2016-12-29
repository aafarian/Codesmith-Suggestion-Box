import React from 'react';
import Suggestion from './Suggestion';
import AdminLogin from './AdminLogin';

export default class Layout extends React.Component {
  render() {

    return (
      <div>
      <div id="titlebar" className="title-bar">Welcome to the official Codesmith Suggestion Box!</div>
        <Suggestion 
        msg={this.props.msg}
        logout={this.props.logout}
        reset={this.props.reset}
        loggedIn={this.props.loggedIn} 
        clicked={this.props.clicked} 
        msgs={this.props.msgs} 
        change={this.props.change}
        texterr={this.props.texterr} 
        submit={this.props.submit} />
        <AdminLogin 
        loggedIn={this.props.loggedIn}
        username={this.props.username}
        password={this.props.password}
        login={this.props.login}
        err={this.props.err}/>
      </div>
    );
  }
}