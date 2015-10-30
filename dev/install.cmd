@echo off

echo Update Grunt...
call npm update grunt-cli -g

echo Install project...
call npm install --save-dev

pause