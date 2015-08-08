import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('receipt-ui', 'Integration | Component | receipt ui', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{receipt-ui}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#receipt-ui}}
      template block text
    {{/receipt-ui}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
