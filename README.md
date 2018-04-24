## Hentai.js ~ A Hentai API wrapper!

An API wrapper for computerfreaker's [hentai endpoint](https://computerfreaker.cf/api/hentai/read.php) and [anime endpoint](https://computerfreaker.cf/api/anime/read.php)!

**An Example for usage:**
```js
const Hentai = require("hentai.js");

const hentaiClient = new Hentai();

// Fetching Hentai

hentaiClient.hentai().then((result) => {
    console.log(result);
});

// Getting hentai.js' version

hentaiClient.version();

// Fetching anime

hentaiClient.anime().then((result) => {
    console.log(result);
});
```

Made by snarkyllama™

## Links

NPM ~ [Click me!](https://www.npmjs.com/package/hentai.js)

computerfreaker's website ~ [Click me!](https://computerfreaker.cf/)
