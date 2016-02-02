/* globals moment */
import Ember from 'ember';

export function formatDate([dateString]) {
  return moment(dateString).format("MM/DD/YYYY");
}

export default Ember.Helper.helper(formatDate);
