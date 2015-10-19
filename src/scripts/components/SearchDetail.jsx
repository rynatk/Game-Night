import React from 'react';
import Icon from './Icon';
import StarRating from './StarRating';

class SearchDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.model.attributes;
  }

  render () {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <a href="#id/game"><h3 className="panel-title">{this.state.title}</h3></a>
        </div>
        <div className="panel-body">
          <img className="gameImg" src={this.state.images[0]} />
          <p>
            <i>{this.state.description}</i>
          </p>
          <div className="inline">
            <p><Icon type="users"/>
              {this.state.minPlayers}-{this.state.maxPlayers}
            </p>
            <p>
              <Icon type="hourglass-half"/>
              {this.state.duration}
            </p>
            <p>
              <Icon type="cogs"/>
              {this.state.difficulty}
            </p>
            <StarRating rating={this.state.rating} />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchDetail;
