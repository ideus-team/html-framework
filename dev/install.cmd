@echo off
echo Update environment...

echo Update Ruby...
call gem update --system

echo Update Ruby Sass...
call gem update sass

echo Update Bourbon...
call gem update bourbon
call gem update neat
call gem update bitters

echo Update Grunt...
call npm update grunt-cli -g

echo Install project...
call npm install --save-dev

pause