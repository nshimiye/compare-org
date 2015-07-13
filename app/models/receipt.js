import DS from 'ember-data';

var Receipt = DS.Model.extend({
  'totalCost': DS.attr('number'),
  'paymentMethod': DS.attr('string'),
  'physicalPrint': DS.attr('string'),
  'market': DS.belongsTo('market', {
    inverse: null,
    async: true
  }), //we cannot use store because it is built in
  'prices': DS.hasMany('price', {
    inverse: null,
    async: true
  })
});

Receipt.reopenClass({
  FIXTURES: [
    { id: 1, totalCost: 90.00, paymentMethod: 'DEBIT CARD', prices: [] },
    { id: 2, totalCost: 97.99, paymentMethod: 'DEBIT CARD', prices: [] }
  ]
});

export default Receipt;
