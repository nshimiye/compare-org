import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('pie-chart-ui', 'Integration | Component | pie chart ui', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pie-chart-ui}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#pie-chart-ui}}
      template block text
    {{/pie-chart-ui}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
