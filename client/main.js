import './main.html';
import {Meteor} from 'meteor/meteor';
import ReactDom from 'react-dom';
import React from 'react';
import Setting from '../imports/ui/setting';

Meteor.startup(()=>{
  ReactDom.render(<Setting />,document.getElementById('app'));
});
