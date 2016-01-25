```
__          __        _     _   ______              _   ______         _       
\ \        / /       | |   | | |  ____|            | | |  ____|       | |      
 \ \  /\  / /__  _ __| | __| | | |__ ___   ___   __| | | |__ __ _  ___| |_ ___ 
  \ \/  \/ / _ \| '__| |/ _` | |  __/ _ \ / _ \ / _` | |  __/ _` |/ __| __/ __|
   \  /\  / (_) | |  | | (_| | | | | (_) | (_) | (_| | | | | (_| | (__| |_\__ \
    \/  \/ \___/|_|  |_|\__,_| |_|  \___/ \___/ \__,_| |_|  \__,_|\___|\__|___/
```

Dataset available here: https://www.kaggle.com/openfoodfacts/world-food-facts

#### Extracting the sample from the dataset

```bash
npm install
cd data/scripts
bash split-csv-into-json-files.sh <csv-file> ../raw/json/ food-facts 10000
cd ..
bash queries.sh
```

#### System Requirements
- Node v5.0.0 (will likely work on older versions)
- npm v3.5.2 (this is the version of npm that ships with node v5.0.0)

