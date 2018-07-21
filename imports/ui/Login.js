import React from 'react';
import {Meteor} from 'meteor/meteor';



export default class Login extends React.Component
{
  handleSubmit(e)
  {
    e.preventDefault();
    let user = e.target.username.value;
    let password = e.target.password.value;
    Meteor.loginWithPassword(user,password,(err)=>
    {
      if(err)
      {
        console.log(err.reason);
      }
    });
  }

  render()
  {
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
      <input type="text" name="username" placeholder="email or username"/><br />
      <input type="password" name="password" placeholder="passwordword"/><br />
      <button>Login</button><br />
      </form>
      </div>
    );
  }
}
