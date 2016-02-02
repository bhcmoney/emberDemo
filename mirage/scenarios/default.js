function createCachedList(server, type, count, overrides) {
  let cachedJson = localStorage.getItem(`mirage/${type}`);
  if (cachedJson) {
    let json = JSON.parse(cachedJson);
    json.forEach((el) => {
      let record = server.create(type, el);
      // TODO: patch mirage to fix this bug
      // it is not properly setting _currentValue as records get added with string ids
      let collection = server.db._collections.findBy('name', 'messages');
      collection.identityManager._currentValue = parseInt(el.id, 10);
    });
    // TODO: patch mirage to fix this bug
    // it is not properly setting _currentValue as records get added with string ids
    let collection = server.db._collections.findBy('name', 'messages');
    collection.identityManager.inc();
  } else {
    let list = server.createList(type, count, overrides);
    localStorage.setItem(`mirage/${type}`, JSON.stringify(list));
  }
}

export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  server.createList('message', 10);
  server.createList('message', 5, {folder: 'archive'});
  server.createList('message', 2, {folder: 'trash'});

  for (let i = 0, l = 10; i < l; i++) {
    let author = server.create('author');
    let article = server.create('article', {authorId: author.id});
  }
}
