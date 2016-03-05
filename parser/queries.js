module.exports = [
  'SELECT countries_en FROM FoodFacts GROUP BY countries_en ORDER BY num_products ASC',
  'SELECT COUNT(countries_en) as num_products FROM FoodFacts GROUP BY countries_en ORDER BY num_products ASC',
  'SELECT SUM(proteins_100g) as protein FROM FoodFacts GROUP BY countries_en ORDER BY num_products ASC',
  'SELECT SUM(salt_100g) as salt FROM FoodFacts GROUP BY countries_en ORDER BY num_products ASC',
  'SELECT SUM(sodium_100g) as sodium FROM FoodFacts GROUP BY countries_en ORDER BY num_products ASC',
  'SELECT SUM(sugars_100g) as sugars FROM FoodFacts GROUP BY countries_en ORDER BY num_products ASC',
  'SELECT SUM(fat_100g) as fat FROM FoodFacts GROUP BY countries_en ORDER BY num_products ASC',
  'SELECT SUM(saturated_fat_100g) as saturated_fat FROM FoodFacts GROUP BY countries_en ORDER BY num_products ASC',
  'SELECT SUM(trans_fat_100g) as trans_fat FROM FoodFacts GROUP BY countries_en ORDER BY num_products ASC',
];
