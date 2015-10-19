import Backbone from 'backbone';

// Usage:
//
// let games = new Games();
// games.fetch().then(function () {
//   console.log(games);
// });

export class Game extends Backbone.Model {
}

export class Games extends Backbone.Collection {
  get url() {
    return '/games.json';
  }

  get model() {
    return Game;
  }
}
