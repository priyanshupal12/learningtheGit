import express from "express";

export const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("api/posts", (req, res) => {
    console.log(req)
});


