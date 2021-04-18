const knex = require('../config/db.config');

class ProductController {

  async list(req, res) {

    try {

      const result = await knex('Product').select('*')

      return res.json(result).end();

    } catch(e) {
      console.error(e);
      res.status(500).end();
    }

  }

  async find(req, res) {

    try {

      const productId = req.params.id;

      const result = await knex('Product').select('*')
        .where('id', productId)

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

      const product = req.body;
      const result = await knex('Product').insert(product, 'id')

      return res.json(result).end();

    } catch(e) {
      console.error(e);
      res.status(500).end();
    }

  }

  async alter(req, res) {

    try {

      const productId = req.params.id;
      const product = req.body;

      const result = await knex('Product').update(product)
        .where('id', productId)

      return res.json(result).end();

    } catch(e) {
      console.error(e);
      res.status(500).end();
    }

  }

  async destroy(req, res) {

    try {

      const productId = req.params.id;

      const result = await knex('Product').delete('id')
        .where('id', productId)

      return res.json(result).end();

    } catch(e) {
      console.error(e);
      res.status(500).end();
    }

  }

}

module.exports = new ProductController();
