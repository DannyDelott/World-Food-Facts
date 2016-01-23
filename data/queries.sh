PARSER=scripts/parse-records-by-required-fields.js

node $PARSER -f countries carbohydrates_100g -o results/carbohydrates-100g-by-country.json 
node $PARSER -f countries proteins_100g -o results/proteins-100g-by-country.json 
node $PARSER -f countries sugars_100g -o results/sugars-100g-by-country.json 
node $PARSER -f countries fat_100g -o results/fat-100g-by-country.json 
node $PARSER -f countries saturated_fat_100g -o results/saturated-fat-100g-by-country.json
node $PARSER -f countries product_name carbohydrates_100g -o results/carbohydrates-100g-by-country-with-product-name.json 
node $PARSER -f countries product_name proteins_100g -o results/proteins-100g-by-country-with-product-name.json
node $PARSER -f countries product_name sugars_100g -o results/sugars-100g-by-country-with-product-name.json
node $PARSER -f countries product_name fat_100g -o results/fat-100g-by-country-with-product-name.json
node $PARSER -f countries product_name saturated_fat_100g -o results/saturated-fat-100g-by-country-with-product-name.json

