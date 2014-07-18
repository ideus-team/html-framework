# html-framework

Our HTML5 template, based on [HTML5Boilerplate](https://github.com/h5bp/html5-boilerplate)

## Install

Для установки Grunt и плагинов к нему необходимо запустить файл `install.bat` в директории `dev` или выполнить там же следующую команду:

```shell
npm install --save-dev
```
Необходима установка GIT

## Start

Для начала работы с Grunt необходимо запустить файл `start.bat` в директории `dev` или выполнить там же следующую команду:

```shell
grunt watch:main
```

Если необходимость в минимизации CSS и JS отсутствует, то нужно запустить файл `start-dev.bat` в директории `dev` или выполнить там же следующую команду:

```shell
grunt watch:dev
```

### Imagemin

В случае, если необходимо произвести минимизацию изображений в директории `img`, нужно запустить файл `imagemin.bat` в директории `dev` или выполнить там же следующую команду:

```shell
grunt imagemin
```