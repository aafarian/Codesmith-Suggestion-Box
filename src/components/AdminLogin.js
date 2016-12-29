import React from 'react';


export default class AdminLogin extends React.Component {
  render() {
    if (this.props.loggedIn === true) {
      return (<div></div>);
    }
    else {
    return (
      <div id="container" className="app-container">
        <div id="adminfield" className="admin-field">
          <div id="containertitle" className="container-title">Admin Login</div>
            
            <div id="forms" className="forms">
                <div>Username: <input id="username" onChange={this.props.username} className="username"></input></div>
                <div>Password: <input type="password" id="password" onChange={this.props.password} className="password"></input></div> 
            </div>
                <button onClick={this.props.login} id="loginbtn">Login</button>
                <div id="err">{this.props.err}</div>
        </div>
        </div>
    );
    }
    
  }
}






