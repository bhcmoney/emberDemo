import Ember from 'ember';
import AuthMixin from 'emberbook/mixins/authenticated-route';

export default Ember.Route.extend(AuthMixin, {
  model() {
    return $.getJSON('/api/v1/connections');
  }
});
