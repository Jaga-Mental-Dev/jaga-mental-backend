export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500; // Default to 500 if no statusCode is set
  const errorMessage = err.message || "An unexpected error occurred";

  res.status(statusCode).json({
    error: true,
    data: null,
    message: errorMessage,
  });
};
