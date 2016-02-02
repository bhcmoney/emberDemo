import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  firstName() { return faker.name.firstName(); },
  lastName() { return faker.name.lastName(); },
  pictureUrl() { return `${faker.image.imageUrl(80, 80)}?${Date.now()}`; },
});
