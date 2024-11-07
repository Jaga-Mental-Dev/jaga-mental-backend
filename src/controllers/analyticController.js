import * as analyticService from "../services/analyticService.js";

const getEmotionCount = async (req, res, next) => {
  try {
    const { from, to } = req.body;
    const data = await analyticService.getEmotionCount(from, to);

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
