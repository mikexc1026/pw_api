module.exports = (sequelize, Sequelize) => {
    const Car = sequelize.define("car", {
      make: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      blinkerFluidLevel: {
        type: Sequelize.ENUM('FULL', 'LOW', 'EMPTY')
      }
    });
  
    return Car;
  };