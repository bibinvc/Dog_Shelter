#!/usr/bin/env sh

set -e

npm run serve

cd dist

git init
git add -A
git commit -m 'New Deployemnt'
git push -f git@github.com:bibinvc/Dog_Shelter.git master:shop

cd -

