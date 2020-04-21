#!/bin/bash

echo "Deploying Started"
heroku create promptli-branch-$1 --manifest
rm -rf ./app/static/widget
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
git push
echo "Deployment Complete"
