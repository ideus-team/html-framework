# HTML Framework
Our HTML Framework based on H5BP+Grunt+SASS.
* [How to install and run](#how-to-install-and-run)
* [Use CSS-sprites](#use-css-sprites)
  * [CSS-sprites with retina support](#css-sprites-with-retina-support)

## How to install and run
Instalation procedure is similar for Win/Mac/Linux.

### 1. Install [Node.js](https://nodejs.org/en/download/)
LTS (Recommended For Most Users), Windows Installer 64-bit (needed for Grunt).

### 2. Install Grunt
Run cmd as administrator and execute:

```shell
npm install grunt-cli -g
```

### 3. Get Framework
Git Clone:
- URL: https://github.com/ideus-team/html-framework.git

### 4. Install
Once run `dev\_install.cmd` or execute in shell:

```shell
npm install --save-dev
```

### 5. Run
#### Dev
Start Grunt with `dev\_dev.cmd` or execute in shell:

```shell
grunt dev
grunt concurrent:dev
```

#### Prod
Start Grunt with `dev\_start.cmd` or execute in shell:

```shell
grunt
grunt concurrent:main
```

## Use CSS-sprites

Put PNG images (e.g. `file1.png` & `file2.png`) into `dev\src\img\sprites\` & use this example:

```scss
.b-icon {
  &.-icon_file1 {
    @include sprite($file1);
  }

  &.-icon_file2 {
    @include sprite($file2);
  }
}
```

Generated code will look like this:

```css
.b-icon.-icon_file1 {
  background-image: url(../img/spritesheet.png);
  background-position: 0px 0px;
  width: 28px;
  height: 28px;
}

.b-icon.-icon_file2 {
  background-image: url(../img/spritesheet.png);
  background-position: -28px 0px;
  width: 28px;
  height: 28px;
}
```

### CSS-sprites with retina support

For retina support you need uncomment some lines in `dev/grunt/sprite.js`, use additional images (e.g. `file1@2x.png` & `file2@2x.png`) & this example:

```scss
.b-icon {
  &.-icon_file1 {
    @include retina-sprite($file1-group);
  }

  &.-icon_file2 {
    @include retina-sprite($file2-group);
  }
}
```

Generated code will look like this:

```css
.b-icon.-icon_file1 {
  background-image: url(../img/spritesheet.png);
  background-position: 0px 0px;
  width: 28px;
  height: 28px;
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .b-icon.-icon_file1 {
    background-image: url(../img/spritesheet@2x.png);
    background-size: 56px 28px;
  }
}

.b-icon.-icon_file2 {
  background-image: url(../img/spritesheet.png);
  background-position: -28px 0px;
  width: 28px;
  height: 28px;
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .b-icon.-icon_file2 {
    background-image: url(../img/spritesheet@2x.png);
    background-size: 56px 28px;
  }
}
```
