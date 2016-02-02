import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
  recipients: [{value: 'foo@bar.com'}, {value: 'bar@baz.com'}],
  subject: null,
  body: null,
  errorMessage: null,



  reset() {
    this.setProperties({
      recipients: null,
      subject: null,
      body: null,
      errorMessage: null
    });
  },

  actions: {
    addAnother() {
      let newRecipient = this.get('newRecipient');
      this.get('recipients').pushObject(newRecipient);
      this.set('newRecipient', null);
    },
    submit() {
      let recipient = this.get('recipient');
      let subject = this.get('subject');
      let body = this.get('body');

      this.set('errorMessage', null);

      let newRecord = this.store.createRecord('message', {
        recipient, subject, body, folder: 'sent'
      });

      newRecord.save().then((json) => { // function(json) { }
        this.reset();
        this.transitionToRoute('messages');
      }, (jqXHR) => {
        this.set('errorMessage', jqXHR.responseJSON.message);
      })
    }
  }
});
