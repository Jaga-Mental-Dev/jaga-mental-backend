const auth = (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      res.status(401).json({
        error: true,
        message: "Unauthorized",
        data: null,
      });
    } else {
      const user = req.user;
      res.status(200).json({
        error: false,
        data: user,
      });
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export { auth };
