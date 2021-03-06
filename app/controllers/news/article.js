import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,

  actions: {
    edit() {
      this.set('isEditing', true);
    },
    cancel() {
      this.set('isEditing', false);
    },
    save() {
      this.get('model').save();
      this.set('isEditing', false);
    }
  }
});
