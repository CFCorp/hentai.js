const ansicolors = require("ansicolors");

class HentaiJS {
    constructor() {
        this._snek = require("snekfetch");
        this.version = require("./package.json").version;
    }

    /**
    * Gives some hentai (NSFW) :^)
    */
    hentai() {
        return new Promise((result, reject) => {
            try {
                this._snek.get("https://api.computerfreaker.cf/v1/hentai")
                    .then(r => {
                        result(r.body.url);
                    });
            } catch (err) {
                reject(console.log(`[${ansicolors.red("Error!")}] :: ${err.stack}`));
            }
        });
    }

    /**
    * Gives some anime :^)
    */
    anime() {
        return new Promise((result, reject) => {
            try {
                this._snek.get("https://api.computerfreaker.cf/v1/anime")
                    .then(r => {
                        result(r.body.url);
                    });
            } catch (err) {
                reject(console.log(`[${ansicolors.red("Error!")}] :: ${err.stack}`));
            }
        });
    }

    /**
    * Gives some D.VA (some NSFW) :^)
    */
    dva() {
        return new Promise((result, reject) => {
            try {
                this._snek.get("https://api.computerfreaker.cf/v1/dva")
                    .then(r => {
                        result(r.body.url);
                    });
            } catch (err) {
                reject(console.log(`[${ansicolors.red("Error!")}] :: ${err.stack}`));
            }
        });
    }

    /**
    * Gives some traps (some NSFW) :^)
    */
    trap() {
        return new Promise((result, reject) => {
            try {
                this._snek.get("https://api.computerfreaker.cf/v1/trap")
                    .then(r => {
                        result(r.body.url);
                    });
            } catch (err) {
                reject(console.log(`[${ansicolors.red("Error!")}] :: ${err.stack}`));
            }
        });
    }

    /**
    * Gives some hugs :^)
    */
    hug() {
        return new Promise((result, reject) => {
            try {
                this._snek.get("https://api.computerfreaker.cf/v1/hug")
                    .then(r => {
                        result(r.body.url);
                    });
            } catch (err) {
                reject(console.log(`[${ansicolors.red("Error!")}] :: ${err.stack}`));
            }
        });
    }

    /**
    * Get some baguettes :^) 
    */
    baguette() {
        return new Promise((result, reject) => {
            try {
                this._snek.get("https://api.computerfreaker.cf/v1/baguette")
                    .then(r => {
                        result(r.body.url);
                    });
            } catch (err) {
                reject(console.log(`[${ansicolors.red("Error!")}] :: ${err.stack}`));
            }
        });
    }

    version() {
        console.log(`[${ansicolors.blue("Version")}] :: v${this.version}`);
    }
}


module.exports = HentaiJS;