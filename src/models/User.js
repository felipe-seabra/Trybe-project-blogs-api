const UserModuleSchema = (sequelize, Datatypes) => {
  const UserModuleTable = sequelize.define(
    'User',
    {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
      },
      displayName: Datatypes.STRING,
      email: Datatypes.STRING,
      password: Datatypes.STRING,
      image: Datatypes.STRING,
    },
    {
      timestamp: false,
      tableName: "users",
      underscored: true,
    }
  );

  return UserModuleTable;
};

module.exports = UserModuleSchema;
