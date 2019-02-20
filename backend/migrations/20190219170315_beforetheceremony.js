exports.up = function(knex, Promise) {
  return knex.schema.createTable('beforetheceremony', table => {
    table.increments('id').primary()
    table.text('image_url')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('beforetheceremony')
}
