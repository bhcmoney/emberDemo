/* globals markdown */
import Ember from 'ember';

export default Ember.Component.extend({
  text: null,

  html: Ember.computed('text', function() {
    return markdown.toHTML(this.get('text') || "").htmlSafe();
  }),

  foo: Ember.computed('html', function() {
    return this.get('html');
  })
});
