#!/bin/sh

for STAGED in $(git diff --cached --name-only)
do
    if [[ "$STAGED" == *\.js$* ]] && [ -f $STAGED ]; then
        ./node_modules/jscs/bin/jscs $STAGED
        if (( "$?" != 0 )); then
            exit 1
        fi
    fi
done

