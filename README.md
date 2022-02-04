<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isNodeBuiltin

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test whether a string matches a Node.js built-in module name.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-node-builtin
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var isNodeBuiltin = require( '@stdlib/assert-is-node-builtin' );
```

#### isNodeBuiltin( value )

Tests whether a string matches a Node.js built-in module name.

```javascript
var bool = isNodeBuiltin( 'util' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For non-string values, the function returns `false`.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isNodeBuiltin = require( '@stdlib/assert-is-node-builtin' );

var out = isNodeBuiltin( 'fs' );
// returns true

out = isNodeBuiltin( 'child_process' );
// returns true

out = isNodeBuiltin( 'fs-extra' );
// returns false

out = isNodeBuiltin( 'moment' );
// returns false
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/assert-is-node-builtin
```

</section>

<section class="usage">

### Usage

```text
Usage: is-node-builtin [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="examples">

### Examples

```bash
$ is-node-builtin crypto
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'crypto\ncluster\nfs-extra' | is-node-builtin
true
true
false
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-node-builtin.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-node-builtin

[test-image]: https://github.com/stdlib-js/assert-is-node-builtin/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-node-builtin/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-node-builtin/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-node-builtin?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-node-builtin.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-node-builtin/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-node-builtin/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-node-builtin/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-node-builtin/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-node-builtin/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

</section>

<!-- /.links -->
