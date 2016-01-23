# DESCRIPTION:
# Looks for .csv files in the /csv directory and
# outputs them in JSON format to the /json directory.
set -x

FILE_NUMBER=1
for f in ../csv/*.csv
do
   csvtojson $f > ../json\/food-facts$FILE_NUMBER.json
   ((FILE_NUMBER++))
done

