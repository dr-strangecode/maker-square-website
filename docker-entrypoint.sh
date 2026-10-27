#!/bin/sh
set -eu

# Host bind-mount hides the image's node_modules. Reinstall inside the
# named volume if Astro is missing (first run or after package.json change).
if [ ! -x node_modules/.bin/astro ]; then
  echo "Installing npm packages inside the container..."
  npm ci --no-audit --no-fund
fi

exec "$@"
