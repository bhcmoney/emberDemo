import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bootstrap-tokenfield', 'Integration | Component | bootstrap tokenfield', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{bootstrap-tokenfield}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#bootstrap-tokenfield}}
      template block text
    {{/bootstrap-tokenfield}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
