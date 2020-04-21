#!/bin/bash

echo "Build Started"
rm -rf ./app/static/widget
cd widget
yarn install
yarn build
cp -vr ./build ../app/static/widget
cd ../app
yarn install
yarn build
echo "Build Complete"
