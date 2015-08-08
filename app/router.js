import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('receipts', function() {
    this.route('receipt', {path: ':id'});
    this.route('create');
  });
  this.route('items', function() {
    this.route('item', {path: ':id'});
  });
});

export default Router;
