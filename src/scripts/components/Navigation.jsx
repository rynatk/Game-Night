import React from 'react';

class NavigationItem extends React.Component {

  render() {
    let className;
    if (this.props.current)
      className = 'active';

    return (
      <li className={className}>
        <a href={this.props.to}>{this.props.label}</a>
      </li>
    );
  }
}

class Navigation extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button aria-controls="navbar" aria-expanded="false" className="navbar-toggle collapsed" data-target="#navbar" data-toggle="collapse" type="button">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Game Night</a>
          </div>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="nav navbar-nav">
              <NavigationItem current={this.props.current === 'index'} label="Home" to="#/"/>
              <NavigationItem current={this.props.current === 'newGame'} label="New Game" to="#/new"/>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
