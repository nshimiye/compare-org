import Ember from 'ember';

export default Ember.Component.extend({
  markets: [
    {receipts: [1,2,3,4,5,6,7,8], name: 'IKEA'},
    {receipts: [7,8], name: 'Rite Aid'},
    {receipts: [1,6,7,8,10,60,70,80,11,61,71,81,12,63,73,83], name: 'Verizon'},
    {},
    {receipts: [1,2], name: 'Save on Grand'}
  ],
  didInsertElement: function() {
    this.$().foundation(); //or Ember.$(document).foundation();
  }
});
