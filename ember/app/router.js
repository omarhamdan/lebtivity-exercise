import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('events', { path: '/', resetNamespace: true }, function() {
    this.route('new', { path: 'events/new' });
  });
  this.route('event', { path: 'event/:slug' });
});

export default Router;
