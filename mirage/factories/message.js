import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  // read: false,
  subject() { return faker.lorem.sentence(); },
  body() { return faker.lorem.paragraphs(); },
  // seen: true,
  // threadId: "5980481491698749440",
  timestamp() { return faker.date.past(); },
  name() { return `${faker.name.firstName()} ${faker.name.lastName()}`; },
  // header: "InMail | Expertise request",
  pictureUrl() { return `${faker.image.imageUrl()}?${Date.now()}`; },
  folder: 'inbox'
});
