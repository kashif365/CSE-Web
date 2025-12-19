// Application Constants

module.exports = {
  // Server
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",

  // Database
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/eventlab",

  // CORS
  CORS_ORIGIN: process.env.CORS_ORIGIN || "*",

  // API
  API_VERSION: process.env.API_VERSION || "v1",

  // Messages
  SUCCESS_MESSAGES: {
    FETCHED: "Data fetched successfully",
    CREATED: "Resource created successfully",
    UPDATED: "Resource updated successfully",
    DELETED: "Resource deleted successfully",
  },

  ERROR_MESSAGES: {
    SERVER_ERROR: "Internal server error",
    NOT_FOUND: "Resource not found",
    VALIDATION_ERROR: "Validation failed",
    UNAUTHORIZED: "Unauthorized access",
  },

  // HTTP Status Codes
  STATUS_CODES: {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500,
  },
};
