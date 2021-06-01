const jwt = require('jsonwebtoken');

class Auth {

  verifyToken(req, res, next) {

    const authHeader = req.header('authorization');

    if(!authHeader)
      return res.status(401).end();

    const authType = (authHeader.split(' '))[0];
    const token = (authHeader.split(' '))[1];

    if(authType !== 'Bearer')
      res.status(401).end();

    try {

      const jwtData = jwt.verify(token, process.env.JWT_SECRET)
      const idUser = jwtData.userValid.id;

      req.idUser = idUser;

      next();

    } catch(e) {
      console.error(e);
      return res.status(401).end();
    }

  }
}

module.exports = new Auth();
