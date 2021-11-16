const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // find all categories
    // be sure to include its associated Products
    Category.findAll({
      include: [
       {
       model: Product,
       attributes: ["id","product_name","price","stock"]
       },
     ]
   })
      .then(dbData => res.json(dbData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    });
  
  router.get('/:id', (req, res) => {
    // find one category by its `id` value
    Category.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
        model: Product,
        attributes: ["id","product_name","price","stock"]
        },
      ]
    })
      .then(dbData => {
        if (!dbData) {
          res.status(404).json({ message: 'No category found with this id' });
          return;
        }
        res.json(dbData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    // be sure to include its associated Products
  });
  
  router.post('/', (req, res) => {
     Category.create({
       category_name: req.body.category_name,
     })
      .then(dbData => res.json(dbData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    // create a new category
  });
  
  router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Category.update({
        category_name: req.body.category_name
        },
        {
          where: {
          id: req.params.id
          }
        }
      )     
        .then(dbData => {
          if (!dbData[0]) {
            res.status(404).json({ message: 'No Categgory is found with this id' });
            return;
          }
          res.json(dbData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
  });
  
  router.delete('/:id', (req, res) => {
    Category.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbData => {
        if (!dbData) {
          res.status(404).json({ message: 'No Category found with this id' });
          return;
        }
        res.json(dbData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;
