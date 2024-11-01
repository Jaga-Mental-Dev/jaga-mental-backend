import { verifyGoogleToken } from "../utils/verifyGoogleToken.js";

const authenticate = async (req, res, next) => {
  const idToken = req.headers.authorization?.split("Bearer ")[1];

  if (!idToken) {
    return res.status(401).json({ message: "No token provided." });
  }

  try {
    const decodedToken = await verifyGoogleToken(idToken);

    req.user = decodedToken;

    next();
  } catch (error) {
    console.error("Token verification error:", error.message);

    res.status(401).json({ message: "Unauthorized" });
  }
};

export default authenticate;
