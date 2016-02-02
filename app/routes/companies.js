import Ember from 'ember';
import AuthenticatedRoute from 'emberbook/routes/authenticated';

export default AuthenticatedRoute.extend({
  model: function() {
    return $.getJSON('/api/v1/companies');
  }
});
