const rss = require('rss-url-parser');
const checkHalt = stock => new Promise(async (resolve, reject) => {
    if (!stock) { return reject(Error('Stock symbol required')); }
    if (typeof stock !== 'string') { return reject(Error(`Invalid argument type. Required: string. Found: ${typeof stock}`)); }

    const feed = await rss('http://www.nasdaqtrader.com/rss.aspx?feed=tradehalts');
    const occurrence = feed.find(item => item.title == stock);

    if (occurrence && typeof occurrence['ndaq:resumptiontradetime']['#'] === 'undefined') {
        return resolve(true);
    } else {
        return resolve(false);
    }
});
module.exports = {
    checkHalt
};