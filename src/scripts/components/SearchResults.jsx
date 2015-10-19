import React from 'react';
import Icon from './Icon';
import SearchDetail from './SearchDetail';

class SearchResults extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      models: props.collection.models
    };
  }

  componentWillMount() {
    this.props.collection.on('sync update', this.handleSync);
    this.props
      .collection
      .fetch();
  }

  handleSync = () => {
    this.setState({
      models: this.props.collection.models
    });
  }

  render () {
    let details = this.state
      .models
      .map((model, i) => {
        return <SearchDetail key={i} model={model}/>;
      });

    return (
      <div className="container">
        <div className="results">
          <h1>Search Results</h1>
        </div>
        <div className="well inline">
          <p className="wellp">
            <Icon type="users"/>
            2-4
          </p>
          <p className="wellp">
            <Icon type="hourglass-half"/>
            45
          </p>
          <p className="wellp">
            <Icon type="cogs"/>
            Easy
          </p>
        </div>
        {details}
      </div>
    );
  }
}

export default SearchResults;
