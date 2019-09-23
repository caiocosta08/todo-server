module.exports = (sequelize, DataTypes) => {

    const Status = sequelize.define("Status", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
    });

    return Status;
}