import Ember from 'ember';

export default Ember.Mixin.create({
  user: Ember.inject.service('user'),

  beforeModel(transition) {
    if (!this.get('user').checkAuth(transition)) {
      this.transitionTo('login');
    }
  },
});
