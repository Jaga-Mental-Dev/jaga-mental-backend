import { predict } from "../services/inference.js";
import { loadLayersModel } from "../services/loadModel.js";

const getPredict = async (req, res, next) => {
  try {
    const image = req.file;
    const imageBuffer = image.buffer;
    const model = await loadLayersModel();
    const predicting = await predict(model, imageBuffer);
    const [paper, rock] = predicting;

    let result;
    if (paper) {
      result = "paper";
    } else if (rock) {
      result = "rock";
    } else {
      result = "scissor";
    }

    res.send({
      message: "Success",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default getPredict;
