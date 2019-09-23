module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      scope: DataTypes.STRING,
      user_id: DataTypes.STRING,
      date_todo: DataTypes.DATE,
      categorie_id: DataTypes.STRING,
      status_id: DataTypes.STRING
    });
  
    return Task;
  }