module.exports = (sequelize, DataTypes) => {
    const Categorie = sequelize.define('Categorie', {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    });
  
    return Categorie;
  }