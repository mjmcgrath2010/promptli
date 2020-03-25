#!/bin/bash

echo "Deploying Started"
cd widget
yarn install
yarn build
cp -vr ./build ../app/static/widget
cd ../app
yarn install
yarn build
cd ../
git add .
git commit -m "Deploying to Heroku" --allow-empty
git push heroku master --force
echo "Deployment Complete"
