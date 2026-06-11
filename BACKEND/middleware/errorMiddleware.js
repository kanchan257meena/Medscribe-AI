
const errorMiddleware = (err, req, res, next) => {

  if (err.name === "JsonWebTokenError") {
  return res.status(401).json({
    success: false,
    message: "Invalid token",
  });
}
 
if (err.name === "TokenExpiredError") {
  return res.status(401).json({
    success: false,
    message: "Token expired",
  });
}

  const statusCode = err.statusCode || 500;
  if (err.name === "CastError") {
  return res.status(400).json({
    success: false,
    message: "Invalid ID",
  });
}

 res.status(statusCode).json({
  success: false,
  message: err.message || "Server Error",
});
};

module.exports = errorMiddleware;