# sierpinski-arrowhead-cli
Print the [Sierpinski Arrowhead Curve](https://en.wikipedia.org/wiki/Sierpi%C5%84ski_curve#Arrowhead_curve) to the console!  

## Usage
### Via `npx`:
```
$ npx sierpinski-arrowhead-cli <n>
$ npx sierpinski-arrowhead-cli <n> [size] [options]
```
where `n >= 0` and `size >= n` (if provided).

### Via Global Install
```
$ npm install --global sierpinski-arrowhead-cli
$ sierpinski-arrowhead-cli <n>
$ sierpinski-arrowhead-cli <n> [size] [options]
```
where `n >= 0` and `size >= n` (if provided).

### Via Import
```
$ npm install sierpinski-arrowhead-cli
```
then:
```
const sierpinski = require('sierpinski-arrowhead-cli');
console.log(sierpinski.create(<n>));
console.log(sierpinski.create(<n>, { 
    size: <number>, 
    rotate: <left|right|standard>, 
    line: <bold|standard> 
}));
```
The config params are optional.