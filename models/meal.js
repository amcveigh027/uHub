var Sequelize = require('sequelize');

sequelize = new Sequelize('uhub', 'mscweb', 'Password123', {
    dialect: "mysql", // or 'sqlite', 'postgres', 'mariadb'
    port:    3306, // or 5432 (for postgres)
});
 
sequelize
    .authenticate()
    .complete(function(err) {
      if (!!err) {
        console.log('Unable to connect to the database:', err);
      } else {
        console.log('Connection has been established successfully.');
      }
    });

var Meal = sequelize.define('Meal', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
});

sequelize
  .sync({ force: true })
  .complete(function(err) {
     if (!!err) {
       console.log('An error occurred while creating the table:', err);
     } else {
       console.log('It worked!');
     }
  });