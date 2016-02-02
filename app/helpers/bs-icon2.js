import Ember from 'ember';

export function bsIcon2([name]) {
  let escapedName = Ember.Handlebars.Utils.escapeExpression(name);
  return `<span class="glyphicon glyphicon-${escapedName}" aria-hidden="true"></span>`.htmlSafe();
}

export default Ember.Helper.helper(bsIcon2);
