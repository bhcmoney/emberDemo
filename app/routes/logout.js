import Ember from 'ember';

export default Ember.Route.extend({
  user: Ember.inject.service('user'),

  beforeModel() {
    this.get('user').logout();
    this.transitionTo('login');
  }
});
