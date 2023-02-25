# sierpinski-arrowhead-cli
Print the [Sierpinski Arrowhead Curve](https://en.wikipedia.org/wiki/Sierpi%C5%84ski_curve#Arrowhead_curve) to the console!  

![What sierpinski-arrowhead-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-arrowhead-cli/main/img/sierpinski-arrowhead-banner.png)

[![npm version](https://img.shields.io/npm/v/sierpinski-arrowhead-cli)](https://www.npmjs.com/package/sierpinski-arrowhead-cli)
[![bundle size](https://img.shields.io/bundlephobia/min/sierpinski-arrowhead-cli)](https://bundlephobia.com/package/sierpinski-arrowhead-cli)
[![downloads](https://img.shields.io/npm/dy/sierpinski-arrowhead-cli)](https://www.npmjs.com/package/sierpinski-arrowhead-cli)
[![license](https://img.shields.io/npm/l/sierpinski-arrowhead-cli)](https://github.com/spirometaxas/sierpinski-arrowhead-cli/blob/main/LICENSE)

Why the console?  Because it's the *cool* way.  

[See All Fractals](https://spirometaxas.com/projects/fractals-cli) in the [fractals-cli](https://www.npmjs.com/package/fractals-cli) project.

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

## Options
### Recursive Step  
```
$ sierpinski-arrowhead-cli <n>
```
The first param `<n>` is the recursive step.  `<n>` should be an integer greater than or equal to 0.

#### Examples:
```
$ sierpinski-arrowhead-cli 4
```
![What sierpinski-arrowhead-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-arrowhead-cli/main/img/sierpinski-arrowhead-4.png)

```
$ sierpinski-arrowhead-cli 5
```
![What sierpinski-arrowhead-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-arrowhead-cli/main/img/sierpinski-arrowhead-5.png)

### Size
```
$ sierpinski-arrowhead-cli <n> [size]
```
The optional `[size]` param allows the Sierpinski Arrowhead Curve to be drawn at larger sizes.  `[size]` should be an integer greater than or equal to `<n>`.  Including size will draw a Sierpinski Arrowhead Curve of `<n>` recursive steps the size of a Greek Cross fractal with `[size]` recursive steps.  

#### Example:
```
$ sierpinski-arrowhead-cli 3 5
```
![What sierpinski-arrowhead-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-arrowhead-cli/main/img/sierpinski-arrowhead-3-5.png)

### Rotation
```
$ sierpinski-arrowhead-cli <n> --rotate=<left|right|standard>
```
The optional `--rotate` param rotates the Sierpinski Arrowhead Curve.  Supported values:

- `left`: Rotate left 120 degrees
- `right`: Rotate right 120 degrees
- `standard`: No rotation (default)

#### Example:
```
$ sierpinski-arrowhead-cli 5 --rotate=right
```
![What sierpinski-arrowhead-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-arrowhead-cli/main/img/sierpinski-arrowhead-5-rotate_right.png)

```
$ sierpinski-arrowhead-cli 5 --rotate=left
```
![What sierpinski-arrowhead-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-arrowhead-cli/main/img/sierpinski-arrowhead-5-rotate_left.png)

### Line Type
```
$ sierpinski-arrowhead-cli <n> --line=<bold|standard>
```
The optional `--line` param draws the Sierpinski Arrowhead Curve using different line types.  Supported values:

- `bold`: Draw using bold lines
- `standard`: Draw using standard lines (default)

#### Examples:
```
$ sierpinski-arrowhead-cli 5 --line=bold
```
![What sierpinski-arrowhead-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/sierpinski-arrowhead-cli/main/img/sierpinski-arrowhead-5-line_bold.png)

By default, lines are drawn using long unicode slash characters (`╱`, `╲`).  To instead draw using standard slash characters (`/`, `\ `), add the `--slash` param (or shorthand `-s`).
```
$ sierpinski-arrowhead-cli <n> --slash
```
(May look better/worse on certain terminals)

## Related

#### Main Project
- [fractals-cli](https://www.npmjs.com/package/fractals-cli) - Print 22 Fractals to the console

#### Fractal Shapes
- [sierpinski-triangle-cli](https://www.npmjs.com/package/sierpinski-triangle-cli) - Print the Sierpinski Triangle to the console
- [sierpinski-carpet-cli](https://www.npmjs.com/package/sierpinski-carpet-cli) - Print the Sierpinski Carpet to the console
- [sierpinski-hexagon-cli](https://www.npmjs.com/package/sierpinski-hexagon-cli) - Print the Sierpinski Hexagon to the console
- [hexaflake-cli](https://www.npmjs.com/package/hexaflake-cli) - Print the Hexaflake Fractal to the console
- [koch-snowflake-cli](https://www.npmjs.com/package/koch-snowflake-cli) - Print the Koch Snowflake to the console
- [koch-antisnowflake-cli](https://www.npmjs.com/package/koch-antisnowflake-cli) - Print the Koch Anti-Snowflake to the console
- [triflake-cli](https://www.npmjs.com/package/triflake-cli) - Print the Triflake Fractal to the console

#### Fractal Patterns
- [cantor-set-cli](https://www.npmjs.com/package/cantor-set-cli) - Print the Cantor Set to the console
- [cantor-dust-cli](https://www.npmjs.com/package/cantor-dust-cli) - Print the Cantor Dust Fractal to the console
- [h-tree-cli](https://www.npmjs.com/package/h-tree-cli) - Print the H-Tree Fractal to the console
- [minkowski-sausage-cli](https://www.npmjs.com/package/minkowski-sausage-cli) - Print the Minkowski Sausage to the console
- [t-square-cli](https://www.npmjs.com/package/t-square-cli) - Print the T-Square Fractal to the console
- [vicsek-fractal-cli](https://www.npmjs.com/package/vicsek-fractal-cli) - Print the Vicsek Fractal to the console
- [v-tree-cli](https://www.npmjs.com/package/v-tree-cli) - Print the V-Tree Fractal to the console

#### Space Filling Curves
- [dragon-curve-cli](https://www.npmjs.com/package/dragon-curve-cli) - Print the Dragon Curve to the console
- [hilbert-curve-cli](https://www.npmjs.com/package/hilbert-curve-cli) - Print the Hilbert Curve to the console
- [moore-curve-cli](https://www.npmjs.com/package/moore-curve-cli) - Print the Moore Curve to the console
- [peano-curve-cli](https://www.npmjs.com/package/peano-curve-cli) - Print the Peano Curve to the console
- [greek-cross-cli](https://www.npmjs.com/package/greek-cross-cli) - Print the Greek Cross Fractal to the console
- [gosper-curve-cli](https://www.npmjs.com/package/gosper-curve-cli) - Print the Gosper Curve to the console
- [sierpinski-curve-cli](https://www.npmjs.com/package/sierpinski-curve-cli) - Print the Sierpinski "Square" Curve to the console

## License
- [MIT](https://github.com/spirometaxas/sierpinski-arrowhead-cli/blob/main/LICENSE) &copy; [Spiro Metaxas](https://spirometaxas.com)