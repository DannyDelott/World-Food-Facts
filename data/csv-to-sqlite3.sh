#!/bin/sh

SET_MODE=".mode csv"
IMPORT=".import $1 $2"
SAVE=".save $3"

echo "Creating /tmp/foodfacts.txt..."
echo -e "$SET_MODE\n$IMPORT\n$SAVE" > /tmp/foodfacts.txt

echo "Creating SQLite3 database..."
sqlite3 < /tmp/foodfacts.txt

echo "Removing /tmp/foodfacts.txt..."
rm /tmp/foodfacts.txt

