import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['token'],

  token: null,
  isEditing: false,

  doubleClick() {
    this.set('isEditing', true);
  },

  actions: {
    doneEditing() {
      this.set('isEditing', false);
    },

    removedToken(token) {
      this.sendAction("removedToken", token);
    }
  }
});
