module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      scope: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      date_todo: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      categorie_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      status_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      date_finish: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Tasks');
  }
};