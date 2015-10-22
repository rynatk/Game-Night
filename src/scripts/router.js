import Backbone from 'backbone';

class Router extends Backbone.Router {

  get routes() {
    return {
      '' : 'index',
      'new' : 'newGame',
      'info' : 'infoCollect',
      'game/:id' : 'gameDetails',
      'results' : 'searchResults',
      'edit/:id' : 'editGameDetails'
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

  gameDetails(game_id) {
    this.current = 'gameDetails';
    this.game_id = game_id;
  }

  searchResults() {
    this.current = 'searchResults';
  }

  editGameDetails(game_id) {
    this.current = 'editGameDetails';
    this.game_id = game_id;
  }

  initialize() {
    Backbone.history.start();
  }
}

export default Router;
