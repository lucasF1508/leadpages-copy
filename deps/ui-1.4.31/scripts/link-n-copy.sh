#!/bin/sh

echo "Building...."
yarn build

node_module_path="node_modules/@lp/ui/dist"

for var in "$@"
do
  echo "Ghetto Linking to $var"
  mkdir -p "../$var/$node_module_path/"
  cp -r dist/. "../$var/$node_module_path/"
done
