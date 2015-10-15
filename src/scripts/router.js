import Backbone from 'backbone';

class Router extends Backbone.Router {

  get routes() {
    return {
      '' : 'index',
      'new' : 'newGame'
    }
  }

  index() {
    this.current = 'index';
  }

  newGame() {
    this.current = 'newGame';
  }

  initialize() {
    Backbone.history.start();
  }
}

export default Router;
