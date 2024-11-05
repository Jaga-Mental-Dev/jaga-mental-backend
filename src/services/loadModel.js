import * as tf from "@tensorflow/tfjs-node";

export async function loadLayersModel() {
  return tf.loadLayersModel(process.env.MODEL_URL);
}

export async function loadGraphModel() {
  return tf.loadGraphModel(process.env.MODEL_URL);
}
