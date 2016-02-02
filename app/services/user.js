import Ember from 'ember';
import localStorageProperty from 'emberbook/utils/local-storage-property';

export default Ember.Service.extend({
  routing: Ember.inject.service('-routing'),

  priorTransition: null,
  userJson: localStorageProperty('userJson'),
  token: localStorageProperty('token'),

  isLoggedIn: Ember.computed('userJson', {
    get() {
      return this.get('userJson') !== null;
    }
  }),

  checkAuth(transition) {
    this.set('priorTransition', transition);
    return this.get('isLoggedIn');
  },

  login(userJson) {
    this.set('userJson', userJson);
    let priorTransition = this.get('priorTransition');
    if (priorTransition) {
      priorTransition.retry();
      this.set('priorTransition', null);
    } else {
      this.get('routing').transitionTo('index');
    }
  },

  logout() {
    this.set('userJson', null);
  }
});
