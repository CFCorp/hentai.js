const snek = require("snekfetch");
const ansicolors = require("ansicolors");
const { version } = require("./package.json");

class HentaiJS {
    hentai() {
        return new Promise((result, reject) => {
            try {
                snek.get("https://api.computerfreaker.cf/hentai")
                    .then(r => {
                        result(r.body.url);
                    });
            } catch (err) {
                reject(`[${ansicolors.red("Error!")}] :: ${err.stack}`);
            }
        });
    }

    anime() {
        return new Promise((result, reject) => {
            try {
                snek.get("https://api.computerfreaker.cf/anime")
                    .then(r => {
                        result(r.body.url);
                    });
            } catch (err) {
                reject(`[${ansicolors.red("Error!")}] :: ${err.stack}`);
            }
        });
    }

    version() {
        console.log(`[${ansicolors.blue("Version")}] :: v${version}`);
    }
}


module.exports = HentaiJS;