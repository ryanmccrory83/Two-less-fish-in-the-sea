exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tripphotos')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('tripphotos').insert([])
    })
    .then(() => {
      return knex.raw('ALTER SEQUENCE tripphotos_id_seq RESTART WITH 1;')
    })
}
