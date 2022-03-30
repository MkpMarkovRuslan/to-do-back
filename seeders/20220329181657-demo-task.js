"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tasks",
      [
        {
          id: 1,
          text: "John Doe",
          ischeck: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          text: "John Boe",
          ischeck: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          text: "John Voe",
          ischeck: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          text: "John Zoe",
          ischeck: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          text: "John Moe",
          ischeck: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
