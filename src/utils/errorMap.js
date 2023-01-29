const errorMap = {
  BAD_REQUEST: 400,
  USER_NOT_FOUND: 404,
  POST_NOT_FOUND: 404,
  EMAIL_ALREADY_REGISTERED: 409,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};