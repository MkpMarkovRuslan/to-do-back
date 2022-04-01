const Sequilize = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "task",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequilize.INTEGER,
      },
      text: {
        type: Sequilize.STRING,
        allowNull: false,
      },
      ischeck: {
        type: Sequilize.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "tasks",
    }
  );
};
