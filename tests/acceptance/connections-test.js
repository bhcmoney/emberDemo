import { test } from 'qunit';
import moduleForAcceptance from 'emberbook/tests/helpers/module-for-acceptance';
import Pretender from 'pretender';

let CONNECTIONS_JSON = {
  connections: [
    {"name":"Joff Redfern","pictureUrl":"https://media.licdn.com/media/p/6/005/05f/2e3/06919f5.jpg","title":"VP Product for Flagship Apps / Platforms at LinkedIn","pictureLogo":"person","connectionsId":"2849241","createdAt":"2014-12-19T06:08:36.258Z"}
  ]
};

let mockServer;

moduleForAcceptance('Acceptance | connections', {
  beforeEach() {
    mockServer = new Pretender(function() {
      this.get('/api/v1/connections', function() {
        return [
          200,
          {"Content-Type": "application/json"},
          JSON.stringify(CONNECTIONS_JSON)
        ];
      });
    });
  },

  afterEach() {
    mockServer.shutdown();
  }
});

test('visiting /connections', function(assert) {
  visit('/connections');

  andThen(function() {
    assert.equal(currentURL(), '/connections');

    let title = find('h1');
    assert.equal(title.text(), 'Connections', "The title is correct");

    let connections = find('.list-item');
    assert.equal(connections.length, CONNECTIONS_JSON.connections.length);
  });
});
