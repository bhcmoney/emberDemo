import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    trash() {
      let record = this.get('model');
      record.destroyRecord().then(() => {
        this.transitionToRoute('messages.list', record.get('folder'));
      })
    }
  }
});
