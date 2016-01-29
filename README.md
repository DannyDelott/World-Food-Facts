```
__          __        _     _   ______              _   ______         _       
\ \        / /       | |   | | |  ____|            | | |  ____|       | |      
 \ \  /\  / /__  _ __| | __| | | |__ ___   ___   __| | | |__ __ _  ___| |_ ___ 
  \ \/  \/ / _ \| '__| |/ _` | |  __/ _ \ / _ \ / _` | |  __/ _` |/ __| __/ __|
   \  /\  / (_) | |  | | (_| | | | | (_) | (_) | (_| | | | | (_| | (__| |_\__ \
    \/  \/ \___/|_|  |_|\__,_| |_|  \___/ \___/ \__,_| |_|  \__,_|\___|\__|___/
```

Dataset available here: https://www.kaggle.com/openfoodfacts/world-food-facts

#### Installation
- Download and unzip the dataset: https://www.kaggle.com/openfoodfacts/world-food-facts

```bash
git clone https://github.com/DannyDelott/World-Food-Facts.git
npm install
npm start
```

#### Extracting the sample from the dataset
- Replace `<csv-file>` with the path to `FoodFacts.csv`

```bash
cd data/scripts
bash split-csv-into-json-files.sh <csv-file> ../json/ food-facts 10000
cd ..
bash queries.sh
```

#### npm scripts

Command | Description
---|---
`npm start` | Run the linter and run the tests
`npm run lint` | Lint all javascript code
`npm run test` | Run the mocha tests

#### System Requirements
- Node v5.0.0 (will likely work on older versions)
- npm v3.5.2 (this is the version of npm that ships with node v5.0.0)

