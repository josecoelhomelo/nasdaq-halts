# nasdaq-halts

Node.js module to fetch stock halts from Nasdaq

# Installation
`npm install nasdaq-halts`

# Usage
Will output "true" or "false" depending on if an halt is in effect for defined stock:

```js
const nasdaq = require('nasdaq-halts');

nasdaq.getNasdaqHalts('TSLA').then(response => {
    console.log(response);
});   
```