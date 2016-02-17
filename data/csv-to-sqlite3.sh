#!/bin/sh

echo "Creating SQLite3 database..."
sqlite3 < commands.txt
