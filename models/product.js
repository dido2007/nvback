const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  imgPath: String,
  isBlog: Boolean,
  title: String,
  description: String,
  ghLink: String,
  demoLink: String
});

module.exports = mongoose.model('Product', productSchema);
