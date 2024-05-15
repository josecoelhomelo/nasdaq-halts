Node.js module to fetch stock halts from Nasdaq.

# Installation
`npm install nasdaq-halts`

# Usage
Will output "true" or "false" depending on if an halt is in effect for a defined stock ticker symbol, for example:

```js
const nasdaq = require('nasdaq-halts');
nasdaq.checkHalt('TSLA')
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
});   
```