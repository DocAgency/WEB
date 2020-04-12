/**
 * FAKER.JS used with JSON-SERVER: When faking an API, it can take a long time to manually enter the data you need to build up the database. 
 * This might be fine for some entries, but for anything that requires a large array of data, it would be better to generate fake data.
 * 
 * SOURCES:
 * 
 * - https://medium.com/backticks-tildes/building-a-mock-rest-api-with-json-server-812ed3e6036a
 * 
 * - https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d
 * 
 * STEPS:
 * 
 * 1-) create a folder named: "api", inside create files: "db.json" & "generate-data.js"
 * 
 * 2-) install faker : npm install --save faker
 * 
 * 3-) create the function generating data: generate-data,  Just make a JS file that requires Faker, and export a method that returns an object of generated data.
 * 
 * 4-) json-server api/generate-posts.js --port 3001
 * 
 * 5-) open the url: http://localhost:3001/data
 * 
 * 6-) after generating fake data, copy the data & paste in db.json
 * 
 * 7-) json-server --watch api/db.json --port 3001
 * 
 */ 

let faker = require('faker');

let generateData = () => {
  let database = { employees: [], products: [], tasks: [], books: []};

  for (var i = 1; i<= 10; i++) {
    database.products.push({
      id: i,
      name: faker.commerce.productName(),
      description: faker.lorem.sentences(),
      price: faker.commerce.price(),
      imageUrl: "https://source.unsplash.com/1600x900/?product",
      quantity: faker.random.number()
    });
  
    database.tasks.push({
      id: faker.random.uuid(),
      title: faker.hacker.abbreviation()
    });

    database.books.push({
      id: faker.random.uuid(),
      title: faker.hacker.abbreviation()
    });

    database.employees.push({
      id: faker.random.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      emailId: faker.internet.email(),
      active: faker.random.boolean()
    });
    
  }

  return {
    data: {
        employees: database.employees,
        products: database.products,
        books: database.books,
        tasks: database.tasks
    },
    employees: database.employees,
    products: database.products,
    books: database.books,
    tasks: database.tasks
  };
}

module.exports = generateData
