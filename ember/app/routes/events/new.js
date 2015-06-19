import Ember from 'ember';

const { Route, $: { ajax: jqueryAjax }, RSVP: { resolve }, copy } = Ember;

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
    return {
      name: '',
      description: '',
      location: '',
      event_date: null,
      start_time: null,
      end_time: null
    };
  },

  actions: {
    /**
     * @method save
     */
    save() {
      let data = copy(this.get('currentModel'));

      data.event_date = new Date(data.event_date).toISOString();

      post('/events', data).then((response) => {
        this.transitionTo('event', response.slug);
      });
    }
  }
});

function ajax(hash = {}) {
  hash.dataType = 'json';
  hash.contentType = 'application/json; charset=utf-8';
  hash.data = JSON.stringify(hash.data);

  return resolve(jqueryAjax(hash));
}

function post(url, data) {
  return ajax({ url, data, type: 'POST' });
}
