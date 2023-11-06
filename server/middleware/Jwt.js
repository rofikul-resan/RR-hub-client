const jwt = require("jsonwebtoken");
const createJwtToken = async (data, secret) => {
  const token = await jwt.sign(data, secret, { expiresIn: "7d" });
  const bearerToken = `bearer ${token}`;
  return bearerToken;
};

const verifyJWT = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  const token = bearerToken.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
    if (err) {
      console.log(err);
      res.sendStatus(405);
    } else {
      req.decode = decode;
      next();
    }
  });
};

module.exports = createJwtToken;
module.exports = verifyJWT;
