#How to install and run HTML Framework
Our HTML Framework based on H5BP+Grunt+SASS.

Instalation procedure is similar for Win/Mac/Linux.

##1. Install [Ruby](http://rubyinstaller.org/downloads/)
Ruby __2.2.X__ x64 installer (needed for SASS (grunt-contrib-sass).
 - Select __„Add Ruby executables to your PATH“__.

##2. Install SASS+Compass
```
gem install sass
gem install compass
```
If you get SSL error — foolow [this steps](https://gist.github.com/luislavena/f064211759ee0f806c88#manual-solution-to-ssl-issue).

##3. Install [Node.js](https://nodejs.org/en/download/current/)
Current (latest features), Windows Installer 64-bit (needed for Grunt).

##4. Install Grunt
Run cmd as administrator and execute:
```
npm install grunt-cli -g
```

##5. Get Framework
Git Clone:
- URL: https://github.com/ideus-team/html-framework.git

##6. Install
Once run `dev\install.cmd` or execute in shell:
```shell
npm install --save-dev
```

##7. Run
Start Grunt with `dev\start.cmd` or execute in shell:
```shell
grunt prod
grunt watch
```
