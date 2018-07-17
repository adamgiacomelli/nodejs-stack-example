const responseMiddleware = (req, res) => {
  if (res.message) {
    res.status(res.statusCode).send({
      data: res.data,
      message: {
        text: res.message.text,
        status: res.message.status
      }
    });
  } else {
    res.status(404).send({
      message: "Route not found",
      statusCode: 404
    });
  }
};

module.exports = responseMiddleware;
