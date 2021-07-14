module.exports = (sequelize, Sequelize) => {
    const Car = sequelize.define("car", {
      make: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      }
    });
  
    return Car;
  };