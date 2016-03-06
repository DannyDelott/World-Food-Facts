#!/bin/sh

for STAGED in $(git diff --cached --name-only)
do
    if [[ "$STAGED" == *\.js$* ]]; then
        ./node_modules/jscs/bin/jscs $STAGED
    fi
done
