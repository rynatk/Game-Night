import React from 'react';
import Icon from './Icon';

class GameDetails extends React.Component {

  render() { return <div class="gamedetailswrapper">
    <div className="gamedetailstitle">Sorry</div>
    <div className="container content">
      <div className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="item active">
            <div className="row">
                  <div className="col-lg-4 col-xs-12">
                    <img className="media-object img-rounded img-responsive center-block gamepic" src="https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.etsystatic.com%2F000%2F0%2F6086728%2Fil_fullxfull.295931665.jpg&f=1"/>
                    </div>
                </div>
              </div>
              <div className="item">
                <div className="row">
                      <div className="col-lg-4 col-xs-12">
                        <img className="media-object img-rounded img-responsive center-block gamepic" src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-wTLICDC8zyo%2FTj1vyMHjbuI%2FAAAAAAAAEgQ%2F-pIYpVfO9aM%2Fs1600%2Fsorry%2Bboard%2Bgame.jpg&f=1"/>
                        </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="row">
                          <div className="col-lg-4 col-xs-12">
                            <img className="media-object img-rounded img-responsive center-block gamepic" src="https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwhatgamedoyouwanttoplay.com%2Fwp-content%2Fuploads%2F2014%2F11%2Fyellow.jpg&f=1"/>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                    <div className="row row-centered gamedeatilitem">
                        <i className="col-xs-4 fa fa-users fa-2x text-center"> 2-4 </i>
                        <i className="col-xs-4 fa fa-hourglass-half fa-2x text-center"> 30 min.</i>
                        <i className="col-xs-4 fa fa-cogs fa-2x text-center"> Easy</i>
                    </div>
                    <div className="row row-centered">
                      <div className="col-xs-12 text-center detailsinfo">Details:</div>
                    </div>
                    <div className=" gamedetailsdetails">Slide Pursuit Game
                      Race your four game pieces from Start around the board to your Home in this Pachisi type game. By turning over a card from the draw deck and following its instructions, players move their pieces around the game board, switch places with players, and knock opponents pieces off the track and back to their Start position.
                      Slides are located at various places around the game board. When a player's piece lands at the beginning of one of these slides not of its own color, it automatically advances to the end, removing any opponent's piece on the slide and sending it back to Start.
                      Game moves are directed exclusively by cards from the play-action deck. If one plays the normal version in which one card is drawn from the deck each turn, the outcome has a huge element of luck. Sorry can be made more of a strategic game (and more appealing to adults) by dealing five cards to each player at the start of the game and allowing the player to choose which card he/she will play each turn. In this version, at the end of each turn, a new card is drawn from the deck to replace the card that was played, so that each player is always working from five cards.
                      A player's fortunes can change dramatically in one or two rounds of play through the use of Sorry cards, the "11" cards (which give the player the option of trading places with an opponent's piece on the track), and the fact that it is possible to move from Start to Home without circumnavigating the full board by making judicious use of the backward 4 cards.
                    </div>
                  </div>
                </div>
              }
}

export default GameDetails;
