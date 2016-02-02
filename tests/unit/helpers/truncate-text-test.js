import { truncateText } from '../../../helpers/truncate-text';
import { module, test } from 'qunit';

module('Unit | Helper | truncate text');

test('it works', function(assert) {
  let inputString = "x".repeat(100);
  let result = truncateText([inputString]);
  assert.equal(result, "x".repeat(50));
});

test('it works with max parameter', function(assert) {
  let inputString = "x".repeat(100);
  let result = truncateText([inputString], {max: 75});
  assert.equal(result, "x".repeat(75));
});
