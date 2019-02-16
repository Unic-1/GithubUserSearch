module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    }, {
      freezeTableName: true,
      tableName: 'user',
      underscored: false,
    });
    return user;
  };
  