# About

> this repo is a game structure that I use to build javascript games using pixi.js as renderer.

## Directory Structure

* data (states, values shared across the game)
* elements (background, bullets, enemies, etc)
* screens(instructions, main screen, etc)
* managers(game manager, screen manager, etc)
* utils(collision methods, mathematics, etc)

## Libraries Included

* [pixi.js](https://github.com/pixijs/pixi.js)
* [broadcaster.js](https://github.com/juliocanares/broadcaster.js)
* [normalize.css](https://github.com/necolas/normalize.css/)


## How to build

You need to have [node.js and npm](https://nodejs.org/en/) installed to run the project also you need
[grunt.js](http://gruntjs.com/)  to run the tasks , when you are already go to install all the dependencies
running.

```sudo npm install```

Now you need to run grunt, just go to root of the project and run

``` grunt ```

Then, you will be able to run the server with the next command 

```node server.js```

By default you need to go to http://127.0.0.1:3000 but you can pass an specific port running.

```PORT=8080 node server.js```