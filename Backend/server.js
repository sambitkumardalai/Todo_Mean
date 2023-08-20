const dotenv = require("dotenv");
dotenv.config();
const http = require("http");
const app = require("./app");

const server = http.createServer(app);
const port = process.env.PORT;

server.listen(process.env.PORT, () => {
  console.log(`Server listening on ${port}`);
});
