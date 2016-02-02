import Ember from 'ember';

export default Ember.Component.extend({
  newToken: null,

  keyUp(e) {
    if (e.keyCode === 8 && e.target.value === "") {
      this.get('tokens').popObject();
    }
  },

  actions: {
    add(token) {
      this.get('tokens').pushObject({value: token});
      this.set('newToken', null);
    },
    remove(token) {
      let tokenObj = this.get('tokens').findBy('value', token);
      this.get('tokens').removeObject(tokenObj);
    }
  }
});
