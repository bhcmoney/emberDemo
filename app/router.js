import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.route('application', function() {
  this.route('companies', { path: 'c' });
  this.route('connections');
  // });
  this.route('messages', function() {
    this.route('list', { path: '/:folderId' }, function() {
      this.route('show', { path: '/show/:messageId' });
    });
    this.route('compose');
  });
  this.route('news', function() {
    this.route('article', { path: '/show/:articleId' });
    this.route('create');
  });
  this.route('login');
  this.route('logout');

  this.route('error404', {path: '*missingPath'});
});

export default Router;
