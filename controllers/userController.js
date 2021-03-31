exports.bye = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello from the server!",
    params: req.params,
    body: req.body,
  });
};
