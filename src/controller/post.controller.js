const { postService } = require('../services');
const errorMap = require('../utils/errorMap');

const createNewPost = async (req, res) => {
  const { body } = req;
  const userId = req.user.id;

  const { type, message } = await postService.createNewPost({ ...body, userId });
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

const listPosts = async (_req, res) => {
  const { type, message } = await postService.findAllPosts();
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const listPostById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await postService.findById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

module.exports = {
  createNewPost,
  listPosts,
  listPostById,
};