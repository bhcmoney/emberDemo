import Ember from 'ember';

export default Ember.Controller.extend({
  firstName: null,
  lastName: null,
  pictureUrl: null,

  actions: {
    submit() {
      let authorData = this.getProperties('firstName', 'lastName', 'pictureUrl');
      let author = this.store.createRecord('author', authorData);
      author.save().then(() => {
        this.set('model.author', author);
        this.get('model').save().then(() => {
          this.transitionToRoute('news.article', newArticle.get('id'));
        }, () => {
          // error handling?
        });
      });
    }
  }
});
