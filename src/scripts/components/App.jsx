import React from 'react';

import Navigation from './Navigation';
import Splash from './Splash';
import GameForm from './GameForm';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentRoute: props.router.current
    }
  }

  componentWillMount() {
    this.props
      .router
      .on('route', this.onRoute);
  }

  componentWillUnmount() {
    this.props
      .router
      .off('route', this.onRoute);
  }

  onRoute = () => {
    this.setState({
      currentRoute: this.props.router.current
    });
  }

  render() {
    console.log(this.state.currentRoute);
    let currentView;

    switch (this.state.currentRoute) {
    case 'newGame' :
      currentView = <GameForm/>;
      break;
    default :
      currentView = <Splash/>;
    }

    return (
      <div>
        <Navigation current={this.state.currentRoute}/>
        {currentView}
        <footer className="footer">
          <div className="container">
            <p>
              Made with &hearts; at The Iron Yard
              in St. Petersburg, Florida.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
