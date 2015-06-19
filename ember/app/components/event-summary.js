/**
 * @module Components
 * @class EventSummary
 * @namespace Components
 */
import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  /**
   * @property classNames
   * @type {Array}
   */
  classNames: ['event-summary'],

  /**
   * @property tagName
   * @type {String}
   * @default 'article'
   */
  tagName: 'article'
});
