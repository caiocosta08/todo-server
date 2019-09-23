module.exports = (sequelize, DataTypes) => {
    const Scope = sequelize.define('Scope', {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    });
  
    return Scope;
  }