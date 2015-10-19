import Backbone from 'backbone';

class Router extends Backbone.Router {

  get routes() {
    return {
      '' : 'index',
      'new' : 'newGame',
      'results' : 'searchResults'
    }
  }

  index() {
    this.current = 'index';
  }

  newGame() {
    this.current = 'newGame';
  }

  searchResults() {
    this.current = 'searchResults';
  }

  initialize() {
    Backbone.history.start();
  }
}

export default Router;
