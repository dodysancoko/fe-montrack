const cors = require("cors");

const corsMiddleware = cors({
  origin: ["http://localhost:5173"], // frontend domain
  methods: ["GET", "POST", "PUT", "DELETE"], // methods
  allowedHeaders: ["Content-Type", "Authorization"],
});

module.exports = corsMiddleware;
