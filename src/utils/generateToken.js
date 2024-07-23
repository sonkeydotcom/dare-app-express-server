import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  // Set token in cookie
  res.cookie("jwt", token, {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Expires in 7 days
    httpOnly: true, // Cookie is only accessible via HTTP requests (not via JavaScript)
    secure: process.env.NODE_ENV === "production", // Cookie should only be sent over HTTPS in production
    sameSite: "strict", // Cookie should only be sent to the same domain (not to other domains)
  });

  return token;
};

export default generateToken;
