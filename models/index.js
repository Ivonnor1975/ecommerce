// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});


// Tags belongToMany Products (through ProductTag)
// Products belongToMany Tags (through ProductTag)
ProductTag.belongsTo(Tag, {
  foreignKey: "tag_id"
});

ProductTag.belongsTo(Product, {
  foreignKey: "product_id"
});

Tag.hasMany(ProductTag, {
  foreignKey: "tag_id"
});

Product.hasMany(ProductTag, {
  foreignKey: "product_id"
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
