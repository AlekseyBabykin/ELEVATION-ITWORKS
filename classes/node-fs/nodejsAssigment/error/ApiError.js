class ApiError extends Error {
  status;
  errors;
  constructor(status, message, error = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static badRequest(message, error = []) {
    return new ApiError(400, message, errors);
  }

  static internal(message, error = []) {
    return new ApiError(500, message, errors);
  }

  static forbidden(message, error = []) {
    return new ApiError(403, message, errors);
  }
}

module.exports = ApiError;
