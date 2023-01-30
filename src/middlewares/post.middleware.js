const { newPostSchema, updatePostSchema } = require('./schema');

const validateNewPost = async (req, res, next) => {
  try {
    const { body } = req;
    await newPostSchema.validateAsync(body);
    next();
  } catch (err) {
    if (err.isJoi === true) {
      return res.status(400).send({
        message: 'Some required fields are missing',
      });
    }
  }
};

const validateUpdatePost = async (req, res, next) => {
  try {
    const { body } = req;
    await updatePostSchema.validateAsync(body);
    next();
  } catch (err) {
    if (err.isJoi === true) {
      return res.status(400).send({
        message: 'Some required fields are missing',
      });
    }
  }
};

module.exports = {
  validateNewPost,
  validateUpdatePost,
};