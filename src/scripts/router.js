import Backbone from 'backbone';

class Router extends Backbone.Router {

  get routes() {
    return {
      '' : 'index',
      'new' : 'newGame',
      'game' : 'gameDetails',
      'results' : 'searchResults'
    }
  }
  index() {
    this.current = 'index';
  }

  newGame() {
    this.current = 'newGame';
  }

  gameDetails() {
    this.current = 'gameDetails';
  }

  searchResults() {
    this.current = 'searchResults';
  }

  initialize() {
    Backbone.history.start();
  }
}

export default Router;
