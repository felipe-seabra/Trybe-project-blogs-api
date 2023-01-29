const { postService } = require('../services');
const errorMap = require('../utils/errorMap');

const createNewPost = async (req, res) => {
  const { body } = req;
  const userId = req.user.id;

  const { type, message } = await postService.createNewPost({ ...body, userId });
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

module.exports = {
  createNewPost,
};