import DS from 'ember-data';
import config from 'compare-code/config/environment';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:8080',
  namespace: ''
});
