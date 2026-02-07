export function subscription(req, res) {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "user found",
    data: {
      user,
    },
  });
}
