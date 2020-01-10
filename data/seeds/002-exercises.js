exports.seed = function(knex, Promise) {
    return knex("exercises")
      .truncate()
      .then(function() {
        return knex("exercises").insert([
          {
            name: "Benchpress",
            user_id: 1,
            body_region: "Chest",
            amount_lifted: "150",
            reps: "12",
            sets: "2",
            date: "01/03/2020"
          }
        ]);
      });
  };