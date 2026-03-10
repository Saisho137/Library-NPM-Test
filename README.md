# test-library-saisho

A simple library to greet users.

## Installation

```bash
npm install test-library-saisho
```

## Usage

### ESM (recommended)

```js
import greet from 'test-library-saisho';

console.log(greet('World')); // Hola, ¡World!
```

### CommonJS

```js
const greet = require('test-library-saisho');

console.log(greet('World')); // Hola, ¡World!
```

### TypeScript

```ts
import greet from 'test-library-saisho';

const message: string = greet('World');
console.log(message); // Hola, ¡World!
```

## API

### `greet(name: string): string`

Returns a greeting string for the given name.

| Parameter | Type     | Description               |
|-----------|----------|---------------------------|
| `name`    | `string` | The name to greet         |

**Returns:** `string` — A greeting in the format `Hola, ¡<name>!`

## License

ISC
