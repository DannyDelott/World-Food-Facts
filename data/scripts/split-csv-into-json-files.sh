# DESCRIPTION:
# Turns the single, raw csv dataset file into a clean set of json files.
#
# USAGE:
# bash split-csv-into-json-files.sh <csv-file> <output-directory> <file-name> <num-lines-per-file>

RAW_FILE=$1
OUTPUT_DIRECTORY=$2
FILE_NAME=$3
NUM_LINES_PER_FILE=$4
FILE_NUMBER=1
mkdir -p $OUTPUT_DIRECTORY
split -l $NUM_LINES_PER_FILE $RAW_FILE
for f in *;
do
    if [[ "$f" =~ .sh$ ]]; then
        continue
    fi
    echo "Converting $OUTPUT_DIRECTORY/$FILE_NAME$FILE_NUMBER.json"
    ../../node_modules/csvtojson/bin/csvtojson $f > "$OUTPUT_DIRECTORY/$FILE_NAME$FILE_NUMBER.json"
    rm "$f"
   ((FILE_NUMBER++))
done

