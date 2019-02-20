exports.up = function(knex, Promise) {
  return knex.schema.createTable('ceremony', table => {
    table.increments('id').primary()
    table.text('image_url')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ceremony')
}
