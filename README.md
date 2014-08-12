# html-framework

Our HTML5 template, based on [HTML5Boilerplate](https://github.com/h5bp/html5-boilerplate)

## Install

Для установки Grunt и плагинов к нему необходимо запустить файл `install.bat` в директории `dev` или выполнить там же следующую команду:

```shell
npm install --save-dev
```
Необходима установка [Git](http://git-scm.com/download).

## Start

Для начала работы с Grunt необходимо запустить файл `start.bat` в директории `dev` или выполнить там же следующую команду:

```shell
grunt watch:main
```

Если необходимость в минимизации CSS и JS отсутствует, то нужно запустить файл `start-dev.bat` в директории `dev` или выполнить там же следующую команду:

```shell
grunt watch:dev
```

### Data URIs

Для автоматической генерации Data URI для изображений следует положить файлы изображений в директорию `img/base64`, требуемый код в виде [Sass placeholders](http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#placeholder_selectors_) будет помещён в файл `dev/sass/_base64.scss`. Например для изображения `img/base64/testImg.png` будет сгенерирован следующий код:

_dev/sass/_base64.scss_
```scss
%data-testImg {
	background-image: url("data:image/png;base64,iVBORw0KGgoAAAAN.....") !important;
  .-device_mobile & {background-image: url("../img/base64/testImg.png") !important;}
}
...
```

### Imagemin

В случае, если необходимо произвести минимизацию изображений в директории `img`, нужно запустить файл `imagemin.bat` в директории `dev` или выполнить там же следующую команду:

```shell
grunt imagemin
```


### Pagespeed

Анализ производительности клиентской части Web-приложения. В файл `Gruntfile.js` устанавливаем настройки:

_Адрес анализируемого сайта_
```shell
pageUrl: 'http://ideus.biz'
```

_Сколько баллов нужно получить чтобы пройти тест. Максимум 100 (супероптимизированный сайт)_
```shell
pageThreshold: 70
```

_Какой девайс используем, `desktop` или `mobile`_
```shell
pageDevice: 'desktop'
```

Для анализа необходимо запустить `pagespeed.bat` в директории `dev` или выполнить там же следующую команду:

```shell
grunt speed
```