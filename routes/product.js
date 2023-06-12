const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Importez le modèle de produit que vous avez créé.
const multer = require('multer');

module.exports = (db) => {

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });

  const upload = multer({
    storage: storage
  });



  // Route pour récupérer tous les produits
  router.get('/', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  return router;
};