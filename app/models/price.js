import DS from 'ember-data';

export default DS.Model.extend({
  'amount': DS.attr('number'),
  'currency': DS.attr('string'),
  'quantity': DS.attr('number'),
  'costPerItem': DS.attr('number'),
  'timestamp': DS.attr('date'),

  'receipt': DS.belongsTo('receipt', {
    inverse: null,
    async: true
  }),
  'item': DS.belongsTo('item', {
    inverse: null,
    async: true
  })
});
