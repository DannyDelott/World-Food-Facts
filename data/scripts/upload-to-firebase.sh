# REQUIREMENTS:
# `npm install -g firebase-import`
#
# DESCRIPTION:
# Uploads json to firebase.
set -x

FILE_NUMBER=1
FIREBASE_URL=https://worldnutritionfacts.firebaseio.com/
for f in ../json/*.json
do
   firebase-import --firebase_url $FIREBASE_URL  --json ../json\/food-facts$FILE_NUMBER.json
   ((FILE_NUMBER++))
done

