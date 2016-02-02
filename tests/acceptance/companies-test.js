import { test } from 'qunit';
import moduleForAcceptance from 'emberbook/tests/helpers/module-for-acceptance';
import Pretender from 'pretender';

let COMPANIES_JSON = {
  companies: [
    {id: 1, name: "State Farm"}
  ]
};

let mockServer;

moduleForAcceptance('Acceptance | companies', {
  beforeEach() {
    mockServer = new Pretender(function() {
      this.get('/api/v1/companies', function() {
        return [
          200,
          {"Content-Type": "application/json"},
          JSON.stringify(COMPANIES_JSON)
        ];
      });
    });
  },

  afterEach() {
    mockServer.shutdown();
  }
});

test('visiting /companies', function(assert) {
  visit('/c');

  andThen(function() {
    assert.equal(currentURL(), '/c', "The URL is correct");

    let title = find('h1');
    assert.equal(title.text(), 'Companies', "The title is correct");

    let companies = find('.list-item');
    assert.equal(companies.length, COMPANIES_JSON.companies.length);
  });
});

test('visiting companies from the nav bar link', function(assert) {
  visit('/');

  click('nav a:contains(Companies)');

  andThen(function() {
    assert.equal(currentURL(), '/c');
  });
});

