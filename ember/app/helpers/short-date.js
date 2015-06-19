/* globals moment */
/**
 * Returns formated date as such: `Fri 19 | 10:00am-11:00pm`
 *
 * @method short-date
 * @for Ember.Handlebars.helpers
 * @param {String} date
 * @param {String} startTime
 * @param {String} endTime
 */
import Ember from 'ember';

const { Handlebars: { makeBoundHelper } } = Ember;

export default makeBoundHelper(function(date, startTime, endTime) {
  let newDate = moment(date, 'YYYY-MM-DD').format('MMM D');
  let newStartTime = moment(startTime).utc().format('h:mm a');
  let newEndTime = moment(endTime).utc().format('h:mm a');
  return `${newDate} | ${newStartTime}-${newEndTime}`;
});
