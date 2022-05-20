#!/bin/sh

echo "Building...."
yarn build:ci

node_module_path="node_modules/@lp/template-gallery"

for var in "$@"
do
  echo "Copying to $var"
  mkdir -p "../$var/$node_module_path/"
  cp -r dist/. "../$var/$node_module_path/dist"
  cp -r config/. "../$var/$node_module_path/config"
done
