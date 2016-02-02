import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title() { return faker.lorem.sentence(); },
  articleContent() { return faker.lorem.paragraphs(10); },
  imageUrl() { return `${faker.image.imageUrl(698, 400)}?${Date.now()}`; }
});
