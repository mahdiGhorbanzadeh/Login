import React from 'react';
import {Meteor} from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
  setPassword(newPassword)
  {
    Accounts.setPassword(this.userId,newPassword);
  }
})
