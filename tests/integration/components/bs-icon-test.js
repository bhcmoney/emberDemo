import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bs-icon', 'Integration | Component | bs icon', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{bs-icon name='arrow-left'}}`);

  assert.ok(this.$('span').has('.glyphicon.glyphicon-arrow-left'));
});
