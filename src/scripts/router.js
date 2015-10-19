import Backbone from 'backbone';

class Router extends Backbone.Router {

  get routes() {
    return {
      '' : 'index',
      'new' : 'newGame',
      'info' : 'infoCollect'
    }
  }

  index() {
    this.current = 'index';
  }

  newGame() {
    this.current = 'newGame';
  }

  infoCollect() {
    this.current = 'infoCollect';
  }

  initialize() {
    Backbone.history.start();
  }
}

export default Router;
