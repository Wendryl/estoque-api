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
        return res.status(401).end();

      const token = jwt.sign({ userValid }, process.env.JWT_SECRET, {
        expiresIn: '24h'
      })

      res.json({ token });

    } catch (e) {
      console.error(e);
      return res.status(500).end();
    }

  }

  async list(req, res) {

    try {

      const result = await knex('User')
        .select('User.*')

      return res.json(result).end();

    } catch(e) {
      console.error(e);
      res.status(500).end();
    }

  }

  async find(req, res) {

    try {

      const userId = req.params.id;

      const [result] = await knex('User')
        .select('User.*')
        .where('User.id', userId);

      if(!result) {
        return res.status(404).end();
      }

      return res.json(result).end();

    } catch(e) {
      console.error(e);
      res.status(500).end();
    }

  }

  async store(req, res) {

    try {

      const user = req.body;
      const result = await knex('User').insert(user)

      return res.json(result).end();

    } catch(e) {
      console.error(e);
      res.status(500).end();
    }

  }

  async alter(req, res) {

    try {

      const userId = req.params.id;
      const user = req.body;

      const result = await knex('User').update(user)
        .where('id', userId)

      return res.json(result).end();

    } catch(e) {
      console.error(e);
      res.status(500).end();
    }

  }

  async destroy(req, res) {

    try {

      const userId = req.params.id;

      const result = await knex('User').delete('id')
        .where('id', userId)

      return res.json(result).end();

    } catch(e) {
      console.error(e);
      res.status(500).end();
    }

  }

}

module.exports = new UserController()
