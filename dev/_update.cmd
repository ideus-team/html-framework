@echo off

echo Update Grunt...
call npm update grunt-cli -g

echo Install project packages...
call npm update --save-dev

echo Check updates...
call npm outdated

pause
