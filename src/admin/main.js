import React from 'react';
import ReactDOM from 'react-dom';
import desktopEntry from './desktop-app';
import mobileEntry from './mobile-app';

const UA = navigator.userAgent.toLowerCase();
let elm = desktopEntry;
if (/mobile|android|iphone|ipad|phone/i.test(UA)) {
  elm = mobileEntry;
}
const app = document.getElementById('app');
ReactDOM.render(elm(), app);
