import React from 'react';

import Navigation from './Navigation';
import Splash from './Splash';
import GameForm from './GameForm';
import InfoCollect from './InfoCollect';
import SearchResults from './SearchResults';
import GameDetails from './GameDetails';
import Icon from './Icon';

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
    let currentView;

    switch (this.state.currentRoute) {
      case 'newGame' :
        currentView = <GameForm/>;
        break;
      case 'infoCollect' :
        currentView = <InfoCollect/>;
        break;
      case 'newGame' :
        currentView = <GameForm/>;
        break;
      case 'searchResults' :
        currentView = <SearchResults />;
        break;
      case 'gameDetails' :
        currentView = <GameDetails game_id={this.props.router.game_id} />;
        break;
     default :
      currentView = <Splash/>;
    }

    return (
      <div>
        <Navigation current={this.state.currentRoute}/>
        {currentView}
        <footer className="container">
          <div className="footer">
            <p>
              Made with <Icon type="heart" /> at The Iron Yard
              in St. Petersburg, Florida.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
