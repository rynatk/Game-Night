import React from 'react';
import Icon from './Icon';

class GameForm extends React.Component {render() {
    return (

      <div id="gameForm">
        <div className="container new-game">
          <div id="gameform-jumbotron" className="jumbotron">

            <div className="row row-centered">
            <div className="col-xs-6 col-centered">
              <h2 className="text-center">New Game Form</h2>
            </div>
           </div>

            <form role="form">

              <div className="row row-centered">
                <div className="col-xs-3 col-centered">
                  <p className="text-right">Game Title:</p>
                </div>
                <div className="col-xs-6 col-centered">
                    <input className="form-control" id="title" type="text"></input>
                </div>
                <div className="col-xs-3 col-centered"></div>
              </div>

              <div className="row row-centered">
                <div className="col-xs-3 col-centered">
                  <p className="text-right">Players <Icon type="users" /></p>
                </div>
                <div className="col-xs-3 col-centered">
                  <input className="form-control" placeholder="Min" type="text"></input>
                </div>

                <div className="col-xs-3 col-centered">
                  <input className="form-control" placeholder="Max" type="text"></input>
                </div>
                <div className="col-xs-3 col-centered"></div>
              </div>

              <div className="row row-centered">
                <div className="col-xs-3 col-centered">
                 <p className="text-right">Duration <Icon type="hourglass-half" /></p>
                </div>
                <div className="col-xs-3 col-centered">
                  <input className="form-control" placeholder="Hours" type="text"></input>
                </div>
                <div className="col-xs-3 col-centered">
                  <input className="form-control" placeholder="Minutes" type="text"></input>
                </div>
                <div className="col-xs-3 col-centered"></div>
            </div>

              <div className="row row-centered">
                <div className="col-xs-3 col-centered">
                  <p className="text-right">Difficulty <Icon type="cogs" /></p>
                </div>
                  <div className="col-xs-6 col-centered">
                      <div className="centerBlock">
                    <div className="btn-group btn-group-md" id="diffChoice" data-toggle="buttons">
                      <label className="btn btn-default">
                        <input id="q156" name="quality[25]" type="radio" value="Beginner"/>
                        Beginner
                      </label>
                      <label className="btn btn-default">
                        <input id="q157" name="quality[25]" type="radio" value="Intermediate"/>
                        Intermediate
                      </label>
                      <label className="btn btn-default">
                        <input id="q158" name="quality[25]" type="radio" value="Advanced"/>
                        Advanced
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-xs-3 col-centered"></div>
              </div>

              <div className="row row-centered">
                <div className="col-xs-4 col-centered">
                  <div className="centerBlock">
                  <button className="btn btn-lg btn-success" id="addGame-button" type="submit">Add Game</button>
                  </div>
                </div>
              </div>

            </form>

          </div>
        </div>
      </div>

    );
  }
}

export default GameForm;
