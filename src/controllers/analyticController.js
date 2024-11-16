import * as analyticService from "../services/analyticService.js";

const getEmotionCount = async (req, res, next) => {
  try {
<<<<<<< HEAD
    const { from, to } = req.body;
    const id = req.user.id;
    const data = await analyticService.getEmotionCount(from, to, id);
=======
    const id = req.user.id;
    const data = await analyticService.getEmotionCount(id);
>>>>>>> dev

    res.send({
      error: false,
      data,
      message: "Analytic retrieved successfully",
    });
  } catch (error) {
    next(error);
  }
};

export { getEmotionCount };
