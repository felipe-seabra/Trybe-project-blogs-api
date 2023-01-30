const { Sequelize } = require('sequelize');
const { BlogPost, Category, PostCategory, User } = require('../models');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const findIfCategoryExists = async (ids) => {
  const categories = await Promise.all(
    ids.map(async (id) => Category.findByPk(id)),
  );
  if (categories.some((id) => !id)) return false;
  return true;
};

const insertNewPostCategory = async (categoryIds, postId, t) => {
  await Promise.all(categoryIds
    .map(async (categoryId) => PostCategory.create({ postId, categoryId },
      { transaction: t })));
};

const createNewPost = async ({ title, content, userId, categoryIds }) => {
  const hasCategories = await findIfCategoryExists(categoryIds);
  if (!hasCategories) {
    return { type: 'BAD_REQUEST', message: 'one or more "categoryIds" not found' };
  }
  try {
    const newPost = await sequelize.transaction(async (t) => {
      const post = await BlogPost
        .create({ title, content, userId, published: Date.now(), updated: Date.now() },
          { transaction: t });
      await insertNewPostCategory(categoryIds, post.id, t);
      return post;
    });
    return { type: null, message: newPost };
  } catch (err) {
    return { type: 'BAD_REQUEST', message: err.message };
  }
};

const include = {
  include: [
    {
      model: User,
      as: 'user',
      attributes: ['id', 'displayName', 'email', 'image'],
    },
    {
      model: Category,
      as: 'categories',
      through: PostCategory,
    },
  ],
};

const findAllPosts = async () => {
  const posts = await BlogPost.findAll(include);

  return { type: null, message: posts };
};

const findById = async (id) => {
  const post = await BlogPost.findByPk(id, include);
  if (!post) return { type: 'POST_NOT_FOUND', message: 'Post does not exist' };

  return { type: null, message: post };
};

const checkIfYouOwn = async (userId, id) => {
  const post = await findById(id);
  if (post.type) return post;

  if (post.message.userId !== userId) return false;
  return true;
};

const updatePost = async (userId, id, title, content) => {
  console.log(id);
  const isTheOwner = await checkIfYouOwn(userId, id);

  if (!isTheOwner) return { type: 'UNAUTHORIZED', message: 'Unauthorized user' };

  await BlogPost.update({ title, content }, { where: { id } });

  const returnPostUpdated = await findById(id);

  console.log('CONSOLE LOG: ', returnPostUpdated);

  return returnPostUpdated;
};

module.exports = {
  createNewPost,
  findAllPosts,
  findById,
  updatePost,
};