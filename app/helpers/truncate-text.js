import Ember from 'ember';

export function truncateText([inputString], hash = {}) {
  let max = hash.max || 50;
  return inputString.substr(0, max);
}

export default Ember.Helper.helper(truncateText);
