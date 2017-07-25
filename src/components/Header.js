import React from 'react';

export default class Header extends React.Component {

  render() {
    return (
      <div className="header-cont">
        <header>
          <img className="logo" src="./assets/logo/logo.png" alt="Sparta Plaesent" />
          <div className="header-right">
            <div className="phone">212.555.5555</div>
            <div className="login">LOGIN</div>
            <div className="hamburger">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
