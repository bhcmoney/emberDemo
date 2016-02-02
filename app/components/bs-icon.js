import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  // OR we can configure the component's element like this:

  // tagName: 'span',
  // classNames: ['glyphicon'],
  // classNameBindings: ['iconNameClass'],
  // attributeBindings: ['aria-hidden'],
  // 'aria-hidden': "true",

  // iconNameClass: Ember.computed(function() {
  //   return `glyphicon-${this.get('name')}`;
  // }),
});
