const app = require("./routes/index");

const port = 5000;
const server = app.listen(port, () => {
    console.log('This server is listening on port 5000');
});

module.exports = server;