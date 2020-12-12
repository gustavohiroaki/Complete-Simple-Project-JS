const { validate } = require("uuid");

function validateProjectId(req, res, next) {
  const { id } = req.params;

  if (!validate(id))
    return res.status(400).json({ error: "Invalid project ID" });

  next();
}

module.exports = validateProjectId;
