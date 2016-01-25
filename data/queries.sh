PARSER=parser/parse-records-by-required-fields.js
node $PARSER -f countries proteins_100g -o results/proteins-100g-by-country.json
node $PARSER -f countries salt_100g -o results/salt-100g-by-country.json
node $PARSER -f countries sodium_100g -o results/sodium-100g-by-country.json
node $PARSER -f countries sugars_100g -o results/sugars-100g-by-country.json
node $PARSER -f countries fat_100g -o results/fat-100g-by-country.json
node $PARSER -f countries saturated_fat_100g -o results/saturated-fat-100g-by-country.json
node $PARSER -f countries product_name proteins_100g -o results/proteins-100g-by-country-with-product-name.json
node $PARSER -f countries product_name salt_100g -o results/salt-100g-by-country-with-product-name.json
node $PARSER -f countries product_name sodium_100g -o results/sodium-100g-by-country-with-product-name.json
node $PARSER -f countries product_name sugars_100g -o results/sugars-100g-by-country-with-product-name.json
node $PARSER -f countries product_name fat_100g -o results/fat-100g-by-country-with-product-name.json
node $PARSER -f countries product_name saturated_fat_100g -o results/saturated-fat-100g-by-country-with-product-name.json

