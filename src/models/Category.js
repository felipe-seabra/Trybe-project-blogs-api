const CategoryModuleSchema = (sequelize, Datatypes) => {
  const CategoryModuleTable = sequelize.define(
    'Category',
    {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
      },
      name: Datatypes.STRING,
    },
    {
      timestamps: false,
      tableName: "categories",
      underscored: true,
    }
  );

  return CategoryModuleTable;
};

module.exports = CategoryModuleSchema;