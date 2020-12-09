const server = require("./infrastructure/server");

server.listen(3333, () => {
  console.log("Server is running");
});
