import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  return jwt.sign({ userId }, "dhdhdhdhhjhhh", {
    expiresIn: "7 days",
  });
};

export { generateToken as default };
