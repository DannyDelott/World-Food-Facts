var columns = [
  'countries_en',
  'COUNT(countries_en) as num_products', 
  'SUM(proteins_100g) as protein',
  'SUM(salt_100g) as salt',
  'SUM(sodium_100g) as sodium',
  'SUM(sugars_100g) as sugars',
  'SUM(fat_100g) as fat',
  'SUM(saturated_fat_100g) as saturated_fat',
  'SUM(trans_fat_100g) as trans_fat',
];
var createQuery = function() {
  var query = [
    'SELECT',
    columns.join(', '),
    'FROM FoodFacts',
    'GROUP BY countries_en',
    'ORDER BY num_products ASC'
  ].join(' ');
  return query;
};

module.exports = createQuery();
