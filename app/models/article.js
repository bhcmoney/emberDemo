import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  articleContent: DS.attr('string'),
  imageUrl: DS.attr('string'),

  author: DS.belongsTo('author')
});
