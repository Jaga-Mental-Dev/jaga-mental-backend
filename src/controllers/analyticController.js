import * as analyticService from "../services/analyticService.js";

const getEmotionCount = async (req, res, next) => {
  try {
    const id = req.user.user_id;
    const data = await analyticService.getEmotionCount(id);

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
