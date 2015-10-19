import Backbone from 'backbone';

class Router extends Backbone.Router {

  get routes() {
    return {
      '' : 'index',
      'new' : 'newGame',
      'game' : 'gameDetails'
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

  initialize() {
    Backbone.history.start();
  }
}

export default Router;
