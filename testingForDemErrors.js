const { HentaiClient } = require("./lib/index");

const OwO = new HentaiClient({
    useragent: "Hentai.JS/Development/1.3.4"
});

OwO.hentai().then((r) => {
    console.log(r);
});