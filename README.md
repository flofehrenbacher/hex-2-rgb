# hex-2-rgb

> Important: Uses **ECMAScript modules**. Must be transpiled (e.g. with [Babel](https://babeljs.io/)) for maximal compatibility.

Super lightweight typescript helper function to convert hexes of format `#RRGGBB` to rgb of value `rgb(x,y,z)` or `rgba(x,y,z,a)`.

## Installation

```
npm install @help-me/hex-2-rgb
```

### Usage

```
import { hex2rgb } from '@help-me/hex-2-rgb'

const rgb = hex2rgb('#000000')
console.log(rgb) // rgba(0, 0, 0)

const rgba = hex2rgb('#FFFFFF', 0.5)
console.log(rgba) // rgba(255, 255, 255, 0.5)
```

### Size limit

**Smaller** than 300 bytes (minified and gzipped). No dependencies.

[Size Limit](https://github.com/ai/size-limit) controls the size.
