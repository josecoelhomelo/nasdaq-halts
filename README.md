Node.js module to fetch stock halts from Nasdaq.

## Installation

Install the package using npm:

```shell
npm install nasdaq-halts
```

After installed, import it into your project:

```js
const nasdaq = require('nasdaq-halts');
```

## Usage

Method `checkHalt` will output `true` or `false` depending on if an halt is in effect for a defined stock ticker symbol, for example:

```js
const nasdaq = require('nasdaq-halts');
nasdaq.checkHalt('TSLA')
    .then((halted) => console.log(halted))
    .catch((err) => console.error(err));
});   
```