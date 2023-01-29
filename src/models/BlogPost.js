const BlogPostModuleSchema = (sequelize, Datatypes) => {
  const BlogPostTable = sequelize.define(
    'BlogPost',
    {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // estava dando erro se não colocar.
      },
      title: Datatypes.STRING,
      content: Datatypes.STRING,
      userId: {
        type: Datatypes.INTEGER,
        foreignKey: true
      },
      published: Datatypes.DATE,
      updated: Datatypes.DATE,
    },
    {
      timestamps: false,
      tableName: 'blog_posts',
      underscored: true,
    },
  );

  BlogPostTable.associate = (models) => {
    BlogPostTable.belongsTo(models.User,
      {
        foreignKey: 'userId',
        as: 'user'
      }
    );
  };

  return BlogPostTable;
};

module.exports = BlogPostModuleSchema;
