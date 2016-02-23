var queries = [
  'SELECT * FROM FoodFacts WHERE LENGTH(countries) > 0 AND proteins_100g > 0.0;',
  'SELECT * FROM FoodFacts WHERE LENGTH(countries) > 0 AND salt_100g > 0.0;',
  'SELECT * FROM FoodFacts WHERE LENGTH(countries) > 0 AND sodium_100g > 0.0;',
  'SELECT * FROM FoodFacts WHERE LENGTH(countries) > 0 AND sugars_100g > 0.0;',
  'SELECT * FROM FoodFacts WHERE LENGTH(countries) > 0 AND fat_100g > 0.0;',
  'SELECT * FROM FoodFacts WHERE LENGTH(countries) > 0 AND saturated_fat_100g > 0.0;',
  'SELECT * FROM FoodFacts WHERE LENGTH(countries) > 0 AND trans_fat_100g > 0.0;',
  'SELECT * FROM FoodFacts WHERE LENGTH(countries) > 0 AND LENGTH(product_name) > 0 AND proteins_100g > 0.0;',
  'SELECT * FROM FoodFacts WHERE LENGTH(countries) > 0 AND LENGTH(product_name) > 0 AND salt_100g > 0.0;',
  'SELECT * FROM FoodFacts WHERE LENGTH(countries) > 0 AND LENGTH(product_name) > 0 AND sodium_100g > 0.0;',
  'SELECT * FROM FoodFacts WHERE LENGTH(countries) > 0 AND LENGTH(product_name) > 0 AND sugars_100g > 0.0;',
  'SELECT * FROM FoodFacts WHERE LENGTH(countries) > 0 AND LENGTH(product_name) > 0 AND fat_100g > 0.0;',
  'SELECT * FROM FoodFacts WHERE LENGTH(countries) > 0 AND LENGTH(product_name) > 0 AND saturated_fat_100g > 0.0;',
  'SELECT * FROM FoodFacts WHERE LENGTH(countries) > 0 AND LENGTH(product_name) > 0 AND trans_fat_100g > 0.0;',
];
module.exports = queries;
