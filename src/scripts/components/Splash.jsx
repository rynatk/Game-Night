import React from 'react';

class Splash extends React.Component {

  componentWillMount() {
    $(function() {
      $("#splashtext").delay(1000).fadeIn(1000);
      $("#startnow").delay(2000).fadeIn(1500);
    });
  }

  render() {
    return <div className="container splashcontainer">
      <div className="splashpopout animated fadeIn">
        <div className="animated bounceInDown splashwelcome">It's GameNight!</div>
        <div className="row">
          <div className="col-xs-4 text-right splashgamepad">
            <div className="fa fa-gamepad animated fadeInLeftBig fa-5x"></div>
          </div>
          <div className="col-xs-4 text-center splashpuzzle">
            <div className="fa fa-puzzle-piece animated fadeInUpBig fa-5x"></div>
          </div>
          <div className="col-xs-4 text-left splashtrophy">
            <div className="fa fa-trophy animated fadeInRightBig fa-5x"></div>
          </div>
        </div>
        <div className="centerBlock">
        <div id="splashtext" style={{display: 'none'}}>Personalized Board Game Manager</div>
        </div>
        <div className="centerBlock">
        <button id="startnow" style={{display: 'none'}}>START NOW</button>
        </div>

        </div>
    </div>
  }
}

export default Splash;
