const knex = require('../config/db.config');

class SaleController {

  async list(req, res) {

    try {
      const result = await knex('Sale')
        .select('Sale.*')
        .select('User.name as staff_name')
        .select('Product.description as product_description')
        .innerJoin('Product', 'Product.id', 'Sale.product_id')
        .innerJoin('User', 'User.id', 'Sale.staff_id')

      return res.json(result).end();

    } catch (e) {
      console.log(e);
      res.status(500).end();
    }
  }

  async find(req, res) {

    try {
      const saleId = req.params.id;

      const [result] = await knex('Sale')
        .select('Sale.*')
        .select('User.name as staff_name')
        .select('Product.description as product_description')
        .innerJoin('Product', 'Product.id', 'Sale.product_id')
        .innerJoin('User', 'User.id', 'Sale.staff_id')
        .where('Sale.id', saleId)

      if(!result) {
        return res.status(404).end();
      }

      return res.json(result).end();

    } catch (e) {
      console.log(e);
      res.status(500).end();
    }
  }

  async store(req, res) {

    try {

      const sale = req.body;
      const productId = req.body.product_id;
      sale.staff_id = req.idUser;
      sale.sale_date = new Date();

      await knex('Product')
        .decrement('stock_quantity')
        .where('Product.id', productId);

      const result = await knex('Sale').insert(sale);

      return res.json(result).end();

    } catch(e) {
      console.error(e);
      res.status(500).end();
    }

  }
}

module.exports = new SaleController();
