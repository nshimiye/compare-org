/* global Pizza */
import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['row'],
  didInsertElement: function() {
    this.$().foundation(); //or Ember.$(document).foundation();
    Pizza.init();
  }
});
