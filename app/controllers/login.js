import Ember from 'ember';

export default Ember.Controller.extend({
  user: Ember.inject.service('user'),

  email: null,
  password: null,
  errorMessage: null,

  reset() {
    this.setProperties({
      email: null,
      password: null,
      errorMessage: null
    });
  },

  actions: {
    signIn(email, password) {
      this.set('errorMessage', null);

      $.ajax("/api/v1/auth", {
        type: "POST",
        data: JSON.stringify({email, password})
      }).then((json) => { // function(json) { }
        this.get('user').login(json);
        this.reset();
      }, (jqXHR) => {
        this.set('errorMessage', jqXHR.responseJSON.message);
      });
    }
  }
});
