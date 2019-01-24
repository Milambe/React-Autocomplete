import React, { Component } from 'react';
import './Header.scss';
import AutoCompleteText from '../AutoCompleteText/AutoCompleteText';

class Header extends React.Component {

  render() {
    return (
      // Important! Always set the container height explicitly
      <div>
        <div className="header-wrap">
          <h1>Super Header form</h1>
          <AutoCompleteText />
        </div>
        <br/>
        <div>
          <AutoCompleteText />
        </div>
      </div>
    );
  }
}

export default Header;
