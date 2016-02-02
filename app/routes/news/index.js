import Ember from 'ember';

export default Ember.Route.extend({
  afterModel(model) {
    let firstArticle = model.objectAt(0); // [x] -> objectAt(x)
    this.transitionTo('news.article', firstArticle.get('id'));
  }
});
