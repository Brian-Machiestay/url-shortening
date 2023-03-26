import app from "./routes";

const port = 5000;
app.listen(port, () => {
    console.log('This server is listening on port ${port}');
})