```
__          __        _     _   ______              _   ______         _       
\ \        / /       | |   | | |  ____|            | | |  ____|       | |      
 \ \  /\  / /__  _ __| | __| | | |__ ___   ___   __| | | |__ __ _  ___| |_ ___ 
  \ \/  \/ / _ \| '__| |/ _` | |  __/ _ \ / _ \ / _` | |  __/ _` |/ __| __/ __|
   \  /\  / (_) | |  | | (_| | | | | (_) | (_) | (_| | | | | (_| | (__| |_\__ \
    \/  \/ \___/|_|  |_|\__,_| |_|  \___/ \___/ \__,_| |_|  \__,_|\___|\__|___/
```

Dataset available here: https://www.kaggle.com/openfoodfacts/world-food-facts

#### 1. Installation
- Open Terminal and run the following commands:

```bash
git clone https://github.com/DannyDelott/World-Food-Facts.git
cd World-Food-Facts
npm install
```

#### 2. Building the dataset
- Download and unzip the dataset: https://www.kaggle.com/openfoodfacts/world-food-facts
- Copy `FoodFacts.csv` from the dataset to the `data/` directory
- Run the following command in Terminal:

```bash
bash data/csv-to-sqlite3.sh data/FoodFacts.csv FoodFacts data/foodfacts.db
```

#### 3. Extracting the sample from the dataset

```bash
node parser/ data/foodfacts.db data/result.json
```


#### npm scripts

Command | Description
---|---
`npm run build` | Run the linter and run the tests
`npm run lint` | Lint all javascript code
`npm run test` | Run the mocha tests
`npm run watch` | Watch js files for changes and run `npm run build` automatically

#### System Requirements
- Node v5.0.0 (will likely work on older versions)
- npm v3.5.2 (this is the version of npm that ships with node v5.0.0)

