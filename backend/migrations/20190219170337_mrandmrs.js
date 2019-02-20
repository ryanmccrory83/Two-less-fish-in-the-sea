exports.up = function(knex, Promise) {
  return knex.schema.createTable('mrandmrs', table => {
    table.increments('id').primary()
    table.text('image_url')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('mrandmrs')
}
