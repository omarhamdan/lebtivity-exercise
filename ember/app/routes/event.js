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
  model(params) {
    return $.getJSON(`/events/${params.slug}`);
  }
});
