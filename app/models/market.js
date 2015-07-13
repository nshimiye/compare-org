import DS from 'ember-data';

export default DS.Model.extend({
  'name': DS.attr('string'),
  'receipts': DS.hasMany('receipt', {
    inverse: null,
    async: true
  })
});
