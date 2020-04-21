#!/bin/bash
echo "Build Started"
cd widget
yarn install
wait
yarn build
wait
cp -vr ./build ../app/static/widget
cd ../app
yarn install
wait
yarn build
echo "Build Complete"
