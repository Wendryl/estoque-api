const knex = require('../config/db.config');

class PurchaseController {

  async list(req, res) {

    try {
      const result = await knex('Purchase')
        .select('Purchase.*')
        .select('User.name as staff_name')
        .select('Product.description as product_description')
        .innerJoin('Product', 'Product.id', 'Purchase.product_id')
        .innerJoin('User', 'User.id', 'Purchase.staff_id')

      return res.json(result).end();

    } catch (e) {
      console.log(e);
      res.status(500).end();
    }
  }

  async find(req, res) {

    try {
      const purchaseId = req.params.id;

      const [result] = await knex('Purchase')
        .select('Purchase.*')
        .select('User.name as staff_name')
        .select('Product.description as product_description')
        .innerJoin('Product', 'Product.id', 'Purchase.product_id')
        .innerJoin('User', 'User.id', 'Purchase.staff_id')
        .where('Purchase.id', purchaseId)

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

      const purchase = req.body;
      const purchaseId = req.body.product_id;
      purchase.staff_id = req.idUser;
      purchase.purchase_date = new Date();

      await knex('Product')
        .increment('stock_quantity')
        .where('Product.id', purchaseId);

      const result = await knex('Purchase').insert(purchase);

      return res.json(result).end();

    } catch(e) {
      console.error(e);
      res.status(500).end();
    }

  }
}

module.exports = new PurchaseController();
