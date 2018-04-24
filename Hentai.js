const snek = require("snekfetch");
const ansicolors = require("ansicolors");
const { version } = require("./package.json");

class HentaiJS {
    hentai() {
        return new Promise((result) => {
            try {
                snek.get("https://computerfreaker.cf/api/hentai/read.php")
                    .then(r => {
                        result(r.body.url);
                    });
            } catch (err) {
                console.log(`[${ansicolors.red("Error!")}] :: ${err.stack}`);
            }
        });
    }

    version() {
        console.log(`[${ansicolors.blue("Version")}] :: v${version}`);
    }
}


module.exports = HentaiJS;