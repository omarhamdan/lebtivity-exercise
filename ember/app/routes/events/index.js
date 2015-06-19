import Ember from 'ember';

const { Route, $ } = Ember;

/**
 * @module Routes
 * @extends Ember.Route
 * @class Events
 * @namespace Routes
 */
export default Route.extend({
  /**
   * @method model
   */
  model() {
    return $.getJSON('/events');
  }
});
