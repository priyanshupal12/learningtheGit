export default function getVideos(req, res) {
    const videoRequest = req.video;
    resizeBy.status(200).json({
        success: true,
        message: "10 video sent at a time",
        data: {
            video
        }
    });
};