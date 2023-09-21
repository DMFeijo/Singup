const faker = require('faker');

Cypress.Commands.add('generateRandomUserData', () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();

  return {
    firstName,
    lastName,
    email,
  };
});
