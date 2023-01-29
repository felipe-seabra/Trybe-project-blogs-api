const PostCategoryModuleSchema = (sequelize, Datatypes) => {
  const PostCategoryTable = sequelize.define(
    'PostCategory',
    {
      postId: {
        type: Datatypes.INTEGER,
        foreignKey: true
      },
      categoryId: {
        type: Datatypes.INTEGER,
        foreignKey: true,
      },
    },
    {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
    },
  );

  PostCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category,
      {
        as: 'categories',
        through: PostCategoryTable,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      }
    );
    models.Category.belongsToMany(models.BlogPost,
      {
        as: 'blogPost',
        through: PostCategoryTable,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      }
    );
  };

  return PostCategoryTable;
};

module.exports = PostCategoryModuleSchema;