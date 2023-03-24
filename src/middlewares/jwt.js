import { jwtVerify } from "../utils/jwtUtils.js";

export const jwtMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).json({ message: `no header found` });
  }
  const userId = await jwtVerify(token);
  if (!userId) return res.status(403).json({ message: `no authorization` });
  req.body = { ...req.body, userId };
  next();
};
