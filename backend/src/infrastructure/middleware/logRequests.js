function logRequests(req, res, next) {
  const { method, url } = req;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);
  console.time(logLabel);

  next();

  console.timeEnd(logLabel);
}

module.exports = logRequests;
