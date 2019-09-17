const mongoose = require('mongoose');

//mongoose.Promise = global.Promise;

before((done) => {
  const options = {
    user: 'max',
    pass: 'asdf123'
  };

  //mongoose.connect('mongodb://max:asdf123@localhost/users_test');
  mongoose.connect('mongodb://localhost/users_test?authSource=admin', options);

  mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
      console.warn('Connection error', error)
    });
});

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    // Ready to run next tests!
    done();
  });
});
