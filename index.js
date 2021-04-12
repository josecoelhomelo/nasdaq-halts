const rss = require('rss-url-parser');

const getNasdaqHalts = stock => new Promise(async (resolve, reject) => {

    if (!stock) return reject(Error('stock required'));
    if (typeof stock !== 'string') return reject(Error(`Invalid argument type. Required: string. Found: ${typeof stock}`));

    feed = await rss('http://www.nasdaqtrader.com/rss.aspx?feed=tradehalts');

    found = feed.find(item => item.title == stock);

    if(found && typeof found['ndaq:resumptiontradetime']['#'] === 'undefined')
        return resolve(true);
    else
        return resolve(false);
});

module.exports = {
    getNasdaqHalts
};