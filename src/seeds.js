const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');


const user =
  {
    name: "Wouter",
    email: "wouter@gcodaisseur.com",
    password: "abc123"
  }



const students = [
  {
    name: "Adrianna",
    picture:
      "http://www.colorado.edu/ocg/sites/default/files/styles/small/public/people/person-placeholder_43.jpg?itok=u6SIZO7Y",
    grades: []
  },
  {
    name: "Andrei",
    picture:
      "http://www.colorado.edu/ocg/sites/default/files/styles/small/public/people/person-placeholder_43.jpg?itok=u6SIZO7Y",
    grades: []
  },
  {
    name: "Ann",
    picture:
      "http://www.colorado.edu/ocg/sites/default/files/styles/small/public/people/person-placeholder_43.jpg?itok=u6SIZO7Y",
    grades: []
  },
  {
    name: "Chris",
    picture:
      "http://www.colorado.edu/ocg/sites/default/files/styles/small/public/people/person-placeholder_43.jpg?itok=u6SIZO7Y",
    grades: []
  },
  {
    name: "Claudia",
    picture:
      "http://www.colorado.edu/ocg/sites/default/files/styles/small/public/people/person-placeholder_43.jpg?itok=u6SIZO7Y",
    grades: []
  },
  {
    name: "Elizabeth",
    picture:
      "http://www.colorado.edu/ocg/sites/default/files/styles/small/public/people/person-placeholder_43.jpg?itok=u6SIZO7Y",
    grades: []
  },
  {
    name: "Han",
    picture:
      "http://www.colorado.edu/ocg/sites/default/files/styles/small/public/people/person-placeholder_43.jpg?itok=u6SIZO7Y",
    grades: []
  },
  {
    name: "Jeroen",
    picture:
      "http://www.colorado.edu/ocg/sites/default/files/styles/small/public/people/person-placeholder_43.jpg?itok=u6SIZO7Y",
    grades: []
  },
  {
    name: "Kate",
    picture:
      "http://www.colorado.edu/ocg/sites/default/files/styles/small/public/people/person-placeholder_43.jpg?itok=u6SIZO7Y",
    grades: []
  },
  {
    name: "Bram",
    picture:
      "http://www.colorado.edu/ocg/sites/default/files/styles/small/public/people/person-placeholder_43.jpg?itok=u6SIZO7Y",
    grades: []
  },
  {
    name: "Ilsmarie",
    picture:
      "http://www.colorado.edu/ocg/sites/default/files/styles/small/public/people/person-placeholder_43.jpg?itok=u6SIZO7Y",
    grades: []
  },
  {
    name: "Jesse",
    picture:
      "http://www.colorado.edu/ocg/sites/default/files/styles/small/public/people/person-placeholder_43.jpg?itok=u6SIZO7Y",
    grades: []
  },
  {
    name: "Job",
    picture:
      "http://www.colorado.edu/ocg/sites/default/files/styles/small/public/people/person-placeholder_43.jpg?itok=u6SIZO7Y",
    grades: []
  },
  {
    name: "Maressa",
    picture:
      "http://www.colorado.edu/ocg/sites/default/files/styles/small/public/people/person-placeholder_43.jpg?itok=u6SIZO7Y",
    grades: []
  },
  {
    name: "Omar",
    picture:
      "http://www.colorado.edu/ocg/sites/default/files/styles/small/public/people/person-placeholder_43.jpg?itok=u6SIZO7Y",
    grades: []
  },
  {
    name: "Oliver",
    picture:
      "http://www.colorado.edu/ocg/sites/default/files/styles/small/public/people/person-placeholder_43.jpg?itok=u6SIZO7Y",
    grades: []
  },
  {
    name: "Tim",
    picture:
      "http://www.colorado.edu/ocg/sites/default/files/styles/small/public/people/person-placeholder_43.jpg?itok=u6SIZO7Y",
    grades: []
  },
  {
    name: "Steve",
    picture:
      "http://www.colorado.edu/ocg/sites/default/files/styles/small/public/people/person-placeholder_43.jpg?itok=u6SIZO7Y",
    grades: []
  }
];

const batch = {
  number: 8,
  startDate: 2017 - 05 - 15,
  endDate: 2017 - 07 - 12,
  students: students
};

const feathersClient = feathers();

feathersClient
  .configure(hooks())
  .configure(rest('http://localhost:3030').superagent(superagent))
  .configure(auth());

feathersClient.service('users').create(user)
.then(() => {
  feathersClient.authenticate({
    strategy: 'local',
    email: user.email,
    password: user.password
  })
  .then(() => {
    students.map((student) => {
      feathersClient.service('students').create(student)
        .then((result) => {
          console.log('Student seeded...', result.title);
        }).catch((error) => {
          console.error('Error seeding student!', error.message);
        });
    })
  })
  .catch(function(error){
    console.error('Error authenticating!', error);
  });
})
.catch(function(error) {
  console.error('Error creating user!');
});
