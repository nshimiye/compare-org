import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('receipts', function() {
    this.route('receipt', {path: 'receipts/:id'});
  });
  this.route('items');
});

export default Router;
