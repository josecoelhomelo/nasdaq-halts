const parser = require('rss-url-parser');
const checkHalt = (ticker) => new Promise((resolve, reject) => {
    if (!ticker) { return reject(Error('Stock ticker symbol required')); }
    if (typeof ticker !== 'string') { return reject(Error(`Invalid argument type. Required: string. Found: ${typeof ticker}`)); }
    parser('http://www.nasdaqtrader.com/rss.aspx?feed=tradehalts')
        .then((feed) => {
            const occurrence = feed.find((item) => item.title == ticker);
            if (!occurrence || typeof occurrence['ndaq:resumptiontradetime']['#'] !== 'undefined') { return resolve(false); }
            resolve(true);
        })
        .catch((err) => reject(Error(err)));
});
module.exports = {
    checkHalt
};