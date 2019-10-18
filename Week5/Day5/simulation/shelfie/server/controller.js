module.exports = {
  getProduct: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_products()
      .then(product => res.status(200).send(product))
      .catch(err => {
        res.status(500).send({ errorMessage: "Get didn't work" });
        console.log(err);
      });
  },

  postProduct: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { img, name, price } = req.body;

    dbInstance
      .post_products([img, name, price])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Post didn't work" });
        console.log(err);
      });
  },

  putProduct: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params, query } = req;

    dbInstance
      .put_products([params.id, query.desc])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Put didn't work" });
        console.log(err);
      });
  },

  deleteProduct: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .delete_products(id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Delete didn't work" });
        console.log(err);
      });
  }
};
