import express from "express";

const app = express();

// const hostname = process.env.HOSTNAME;
// const port = process.env.PORT;

const hostname = '127.0.0.1';
const port = 8080;

const fgYellow = "\x1b[33m";
const reset = "\x1b[0m";

app.get("/", (req, res) => {
    res.send('<h1>Hello World!</h1>');
})

app.listen(port, hostname, () => {
    console.log(`\nServer running on http://${hostname}:${port}`);
    console.log(fgYellow, '\nPress Ctrl+C to stop the server', reset);
});