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
        <div className="jumbotron">
          <h2 className="text-center">Search Results</h2>


        {details}
      </div>
    </div>
  </div>
    );
  }
}

export default SearchResults;
