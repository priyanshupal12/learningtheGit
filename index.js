import express, { urlencoded } from "express";
const port = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("api/posts", (req, res) => {
    console.log(req)
})

app.listen(port, () => console.log(`app is listening on the port ${port}`))

console.log("server bani run")