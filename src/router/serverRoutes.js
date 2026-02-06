import express from "express";

const router = express.Router();

router.get("/user", (req, res) => {
  const name = req;
  console.log(name);
});

router.get("/video", (req, res) => {
  const video = req.video;
  console.log(video);
});