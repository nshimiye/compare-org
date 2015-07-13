import DS from 'ember-data';

export default DS.Model.extend({
  'name': DS.attr('string'),
  'image': DS.attr('string'), //link to image that shows the look of this item
  'description': DS.attr('string'),
  'prices': DS.hasMany('price', {
    async: true,
    inverse: null
  })
});
