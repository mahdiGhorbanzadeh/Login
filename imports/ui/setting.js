import React from 'react';
import {Meteor} from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'


export default class Setting extends React.Component
{

  handleChangePassword(e)
  {

        let newPassword = e.target.username.value;
        Meteor.call('setPassword',newPassword);
  }

  render()
  {
    return(
      <div>
      <form onSubmit={this.handleChangePassword}>
      <input type="password" name="username" placeholder="new password"/><br />
      <button>ChangePassword</button><br />
      </form>
      <input type="password" name="password" placeholder="passwordword"/><br />
      <button>Login</button><br />
      </div>
    );
  }
}
