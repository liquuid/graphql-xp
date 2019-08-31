
exports.up = function(knex) {
  return knex.schema.createTable('roles', table => {
      table.increments('id').primary()
      table.string('name').notNull().unique()
      table.string('label').notNull()
  }).then( function() {
      return knex('roles').insert([
          { name:'common', label: 'Common'},
          { name:'admin', label: 'Admin'},
          { name:'master', label: 'Master'},
      ])
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('roles')
};
