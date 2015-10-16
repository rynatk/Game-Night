import React from 'react';

class SearchResults extends React.Component {

  render () {
    return <div className="container">
    <div className="results">
      <h1>Search Results</h1>
      </div>
      <div className="well inline">
      <p className="wellp">👥 2-4</p>
      <p className="wellp">⏳45</p>
      <p className="wellp">Difficulty: <button className="btn-success">Easy</button></p>
     </div>
      <div className="panel panel-default">
      <div className="panel-heading">
       <h3 className="panel-title">Game Title</h3>
      </div>
      <div className="panel-body">
       <img className="gameImg" src="https://www.skylib.com/img/game_placeholder.jpg" />
       <p><i>Game Description here..</i></p>
       <div className="inline">
       <p>👥 3 </p>
       <p>⏳45 </p>
       <p><button className="btn-success">Easy</button></p>
       <p>⭐️⭐️⭐️⭐️</p>
       </div>
    </div>
  </div>
</div>

  }
}

export default SearchResults;
