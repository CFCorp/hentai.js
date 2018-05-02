## Hentai.js ~ A Hentai API wrapper!

An API wrapper for computerfreaker's [hentai endpoint](https://api.computerfreaker.cf/v1/hentai) and [anime endpoint](https://api.computerfreaker.cf/v1/anime)!

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
