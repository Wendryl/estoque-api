const knex = require('../config/db.config');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
require('dotenv').config();

class UserController {

  async authenticate(req, res) {

    const { email, password } = req.body;

    if(!email || !password)
      res.status(400).end();

    try {
      const [userValid] = await knex('User')
        .select('id')
        .where({ email })
        .andWhere({ password });

      if(!userValid)
        res.status(401).end();

      const token = jwt.sign({ userValid }, process.env.JWT_SECRET, {
        expiresIn: '5min'
      })

      res.json({ token });

    } catch (e) {
      console.error(e);
      return res.status(500).end();
    }

  }

}

module.exports = new UserController()
