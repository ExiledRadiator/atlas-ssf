#!/usr/bin/env sh

# abort on errors
set -e

# remove current docs directory
rm -r ./docs/

# build
npm run build

# rename dist --> docs
mv ./dist ./docs

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git commit -a

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push