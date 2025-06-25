#!/bin/bash

# Change to the directory where the script is located
ROOT_FOLDER="../src/assets/images"

find "$ROOT_FOLDER" -type f -name "*.webp" | while read -r file; do
  output="${file%.webp}.webp"

  echo "🔄 Converting: $file → $output"
  cwebp -q 80 "$file" -o "$output"

  if [ -f "$output" ]; then
    rm "$file"
    echo "✅ Replaced: $file deleted"
  else
    echo "❌ Error converting: $file"
  fi
done

echo "🎉 Conversion completed"
