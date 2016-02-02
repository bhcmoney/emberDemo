  import Ember from 'ember';

export default Ember.Component.extend({
  email: null,
  password: null,

  actions: {
    triggerSignIn() {
      this.sendAction('handleLogin', this.get('email'), this.get('password'));
    }
  }
});
