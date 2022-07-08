#!/bin/sh

echo "Building...."
yarn build

node_module_path="node_modules/@lp/lib-upgrade-modal/build"

for var in "$@"
do
  echo "Copying to $var"
  mkdir -p "../$var/$node_module_path/"
  cp -r build/. "../$var/$node_module_path/"
done
