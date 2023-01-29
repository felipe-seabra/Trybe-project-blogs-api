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
      timestamps: false,
      tableName: "users",
      underscored: true,
    }
  );

  UserModuleTable.associate = (models) => {
    UserModuleTable.hasMany(models.BlogPost,
      {
        foreignKey: 'userId',
        as: 'blogPost'
      }
    );
  };

  return UserModuleTable;
};

module.exports = UserModuleSchema;
