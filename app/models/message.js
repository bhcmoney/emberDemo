import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  folder: DS.attr('string'),
  name: DS.attr('string'),
  pictureUrl: DS.attr('string'),
  subject: DS.attr('string'),
  timestamp: DS.attr('date')
});
