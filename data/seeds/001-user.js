exports.seed = function(knex, Promise) {
    return knex('users')
      .then(function () {
        return knex('users').insert([
          { 
            username: 'test',
            password: 'blink182rox',
            age: 19,
            height: '5feet11inches',
            weight: 160,
            gender: 'male',
            email: 'test@gmail.com'
          }
        ]);
      });
  };