#!/bin/sh

CUR=$(pwd)

CURRENT=$(cd "$(dirname "$0")" || exit;pwd)
echo "${CURRENT}"

cd "${CURRENT}" || exit
git pull --prune
result=$?
if [ $result -ne 0 ]; then
  cd "${CUR}" || exit
  exit $result
fi
echo ""
pwd

if ! (disable-checkout-persist-credentials && rm -rf pnpm-lock.yaml node_modules && pnx pnpm@latest self-update && pnpm install --no-frozen-lockfile && pnpm clean --lockfile && pnpm up -r --include-github-actions && pnpm audit --fix override && pnpm up -r && pnpm -r --if-present lint-fix && pnpm -r --if-present build && pnpm -r --if-present test && pnpm install --no-frozen-lockfile); then
  cd "${CUR}" || exit
  exit 1
fi
git commit -am "Bumps node modules" && git push
result=$?
if [ $result -ne 0 ]; then
  cd "${CUR}" || exit
  exit $result
fi

cd "${CUR}" || exit
