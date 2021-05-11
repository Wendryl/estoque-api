const knex = require('../config/db.config');

class CategoryController {

  async list(req, res) {

    try {

      const result = await knex('Category').select('*')

      return res.json(result).end();

    } catch(e) {
      console.error(e);
      res.status(500).end();
    }

  }

  async find(req, res) {

    try {

      const categoryId = req.params.id;

      const [result] = await knex('Category').select('*')
        .where('id', categoryId)

      if(result.length < 1) {
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

      const category = req.body;
      const result = await knex('Category').insert(category)

      return res.json(result).end();

    } catch(e) {
      console.error(e);
      res.status(500).end();
    }

  }

  async alter(req, res) {

    try {

      const categoryId = req.params.id;
      const category = req.body;

      const result = await knex('Category').update(category)
        .where('id', categoryId)

      return res.json(result).end();

    } catch(e) {
      console.error(e);
      res.status(500).end();
    }

  }

  async destroy(req, res) {

    try {

      const categoryId = req.params.id;

      const result = await knex('Category').delete('id')
        .where('id', categoryId)

      return res.json(result).end();

    } catch(e) {
      console.error(e);
      res.status(500).end();
    }

  }

}

module.exports = new CategoryController();
