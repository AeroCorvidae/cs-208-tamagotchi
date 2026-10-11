#!/bin/bash

for file in ./*.jsx components/*.jsx; do
    [ -f "$file" ] || continue

    output="${file%.jsx}.js"

    # Skip if output exists and is newer than the source
    if [ -f "$output" ] && [ "$output" -nt "$file" ]; then
        continue
    fi

    echo "Transpiling: $file"
    npx babel --presets @babel/preset-react "$file" --out-file "$output"
done