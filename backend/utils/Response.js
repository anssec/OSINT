// Custom Reusable Response Function
const Response = (res, success, message, status, data = null) => {
  return res.status(status).json({
    success: success,
    message: message,
    data: data ? data : undefined,
  });
};

module.exports = Response;
