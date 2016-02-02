import Ember from 'ember';

export default Ember.Component.extend({
  // init() {

  // },
  didInsertElement() {
    let $input = this.$('input');
    $input.tokenfield({tokens: this.get('tokens')});
    $input.on('tokenfield:createdtoken tokenfield:editedtoken tokenfield:removedtoken', (event) => {
      if (this._updatingTokens) { return; }
      let tokens = $input.tokenfield('getTokens');
      this.set('tokens', tokens.mapBy('value'));
    });
  },

  _tokensChanged: Ember.observer('tokens.[]', 'asdf', function() {
    this._updatingTokens = true;
    this.$('input').tokenfield('setTokens', this.get('tokens'));
    this._updatingTokens = false;
  }),

  willDestroyElement() {
    $input.tokenfield('destroy');
  },

  willDestroy() {

  }
});
