const knex = require('../config/db.config');

class CompanyController {

  async list(req, res) {

    try {

      const result = await knex('Company').select('*')

      return res.json(result).end();

    } catch(e) {
      console.error(e);
      res.status(500).end();
    }

  }

  async find(req, res) {

    try {

      const companyId = req.params.id;

      const [result] = await knex('Company').select('*')
        .where('id', companyId)

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

      const company = req.body;
      const result = await knex('Company').insert(company, 'id')

      return res.json(result).end();

    } catch(e) {
      console.error(e);
      res.status(500).end();
    }

  }

  async alter(req, res) {

    try {

      const companyId = req.params.id;
      const company = req.body;

      const result = await knex('Company').update(company)
        .where('id', companyId)

      return res.json(result).end();

    } catch(e) {
      console.error(e);
      res.status(500).end();
    }

  }

  async destroy(req, res) {

    try {

      const companyId = req.params.id;

      const result = await knex('Company').delete('id')
        .where('id', companyId)

      return res.json(result).end();

    } catch(e) {
      console.error(e);
      res.status(500).end();
    }

  }

}

module.exports = new CompanyController();
