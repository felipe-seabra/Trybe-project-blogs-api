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

  const { type, message } = await postService.findPostById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const updatePostById = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const userId = req.user.id;

  const { type, message } = await postService.updatePostById(userId, id, title, content);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const deletePostById = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  const { type, message } = await postService.deletePostById(userId, id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(204).json();
};

const searchPostByQuery = async (req, res) => {
  const { q } = req.query;
  if (!q) {
    const { message } = await postService.findAllPosts();

    return res.status(200).json(message);
  }
  const posts = await postService.searchPostByQuery(q);

  return res.status(200).json(posts);
};

module.exports = {
  createNewPost,
  listPosts,
  listPostById,
  updatePostById,
  deletePostById,
  searchPostByQuery,
};