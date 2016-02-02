import fakeServer from 'emberbook/fake-server';
// import PostShorthandRouteHandler from 'ember-cli-mirage/route-handlers/shorthands/post';
import { faker } from 'ember-cli-mirage';

function cachedCreate(schema, modelName, attributes) {
  let newRecord = schema[modelName].create(attributes);
  let allRecords = newRecord._schema.db[`${modelName}s`];
  localStorage.setItem(`mirage/${modelName}`, JSON.stringify(allRecords));
  return newRecord;
}

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = 'api/v2';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');
  */

  this.get("/api/v2/messages", function(schema, req) {
    return schema.message.where({folder: req.queryParams.folder || 'inbox'});

  });
  this.get("/api/v2/messages/:id");
  // this.post("/api/v2/messages");
  this.post("/api/v2/messages", function(schema, req) {
    let requestBody = JSON.parse(req.requestBody);
    let attributes = requestBody.data.attributes;
    attributes.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    attributes['picture-url'] = `${faker.image.imageUrl()}?${Date.now()}`;
    attributes.timestamp = new Date();
  //   // TODO: inject other required attributes like pictureUrl, name, etc
  //   // TODO: validate input
  //   // TODO: put these in the sent folder not the inbox
  //   let newRecord = cachedCreate(schema, 'message', attributes);
    let newRecord = schema.message.create(attributes);
    return newRecord;
  });
  this.put('/api/v2/messages/:id');
  this.del('/api/v2/messages/:id');

  this.get("/api/v2/articles");
  this.post("/api/v2/articles");
  this.get("/api/v2/articles/:id");
  this.put("/api/v2/articles/:id");
  this.patch("/api/v2/articles/:id");
  this.del("/api/v2/articles/:id");

  this.get("/api/v2/authors");
  this.post("/api/v2/authors");
  this.get("/api/v2/authors/:id");
  this.put("/api/v2/authors/:id");
  this.del("/api/v2/authors/:id");

  // this.passthrough();
  fakeServer.apply(this.pretender);
}
