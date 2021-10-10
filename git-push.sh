#!/bin/bash
git add .

echo "Commit message?"
read msg
git commit -m "$msg"

git branch -M main
git remote add origin https://github.com/arnell0/upgraded-umbrella.git
git push -u origin main 