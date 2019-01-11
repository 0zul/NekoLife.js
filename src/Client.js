const snek = require("snekfetch");

module.exports = class NekoClient {

    /**
     * @typedef {Object} ClientOptions
     * @property {string} key - The api token for the client.
     */

    /**
     * @param {ClientOptions} options - The clients options.
     */
    constructor(key = "dnZ4fFJbjtch56pNbfrZeSRfgWqdPDgf") {
        /**
         * The API key for the client.
         * @type {string}
         */
        this.key = key;

        if (typeof key !== `string`) throw Error("Client key must be a string.");
    }


    /** Pat image
    * @returns {Promise<Object>}
    */

    pat() {
        return this._get(`v2/img/pat`);
    }
    /** Hug image
     * @returns {Promise<Object>}
     */

    hug() {
        return this._get(`v2/img/hug`);
    }
    /** Kiss <3 image
     * @returns {Promise<Object>}
     */
    kiss() {
        return this._get(`v2/img/kiss`);
    }
    /** oWo Neko <3 image
     * @returns {Promise<Object>}
     */
    neko() {
        return this._get(`v2/img/neko`);
    }
    /** Why? joke
    * @returns {Promise<Object>}
    */

    why() {
        return this._get(`v2/why`);
    }
    /** LewdNeko <3 image
     * @returns {Promise<Object>}
     */
    LewdNeko() {
        return this._get(`v2/lewd/neko`);
    }
    /** Lizard image
     * @returns {Promise<Object>}
     */
    lizard() {
        return this._get(`v2/img/lizard`);
    
    }

    /** Slap image
     * @returns {Promise<Object>}
     */

    slap() {
        return this._get(`v2/img/slap`);
    }

    /** Poke image
     * @returns {Promise<Object>}
     */

    poke() {
        return this._get(`v2/img/poke`);
    }

      /** Cuddle image
     * @returns {Promise<Object>}
     */

    cuddle() {
        return this._get(`v2/img/cuddle`);
    }

      /** Tickle image
     * @returns {Promise<Object>}
     */

    tickle() {
        return this._get(`v2/img/tickle`);
    }


  /** 8Ball image
     * @returns {Promise<Object>}
     */

    Eightball() {
        return this._get(`v2/img/8ball`);
    }

    /** Femdom image
     * @returns {Promise<Object>}
     */

    femdom() {
        return this._get(`v2/img/femdom`);
    }

    /** Classic image
     * @returns {Promise<Object>}
     */

    classicl() {
        return this._get(`v2/img/classic`);
    }

     /** Ngif image
     * @returns {Promise<Object>}
     */

    ngif() {
        return this._get(`v2/img/ngif`);
    }

 /** EroFeet image
     * @returns {Promise<Object>}
     */

    EroFeet() {
        return this._get(`v2/img/erofeet`);
    }

 /** Meow image
     * @returns {Promise<Object>}
     */

    meow() {
        return this._get(`v2/img/meow`);
    }

 /** Meow image
     * @returns {Promise<Object>}
     */

    FoxGirl() {
        return this._get(`v2/img/fox_girl`);
    }

 /** Meow image
     * @returns {Promise<Object>}
     */

    feed() {
        return this._get(`v2/img/feed`);
    }

 /** Meow image
     * @returns {Promise<Object>}
     */

    CatText() {
        return this._get(`v2/cat`);
    }

 /** Meow image
     * @returns {Promise<Object>}
     */

    OwOify() {
        return this._get(`v2/owoify`);
    }

 /** Meow image
     * @returns {Promise<Object>}
     */

    Kemonomimi() {
        return this._get(`v2/img/kemonomimi`);
    }

 /** Meow image
     * @returns {Promise<Object>}
     */

    holo() {
        return this._get(`v2/img/holo`);
    }

 /** Meow image
     * @returns {Promise<Object>}
     */

    baka() {
        return this._get(`v2/img/baka`);
    }

 /** Meow image
     * @returns {Promise<Object>}
     */

    woof() {
        return this._get(`v2/img/woof`);
    }

/** Meow image
     * @returns {Promise<Object>}
     */

    smug() {
        return this._get(`v2/img/smug`);
    }

    /** Meow image
     * @returns {Promise<Object>}
     */

    RandomHentaiGif() {
        return this._get(`v2/img/Random_hentai_gif`);
    }

    /** Meow image
     * @returns {Promise<Object>}
     */

    pussy() {
        return this._get(`v2/img/pussy`);
    }

    /** Meow image
     * @returns {Promise<Object>}
     */

    lesbian() {
        return this._get(`v2/img/les`);
    }

    /** Meow image
     * @returns {Promise<Object>}
     */

    CumSlut() {
        return this._get(`v2/img/cum`);
    }

    /** boobs image
     * @returns {Promise<Object>}
     */

    boobs() {
        return this._get(`v2/img/boobs`);
    }

    /** Meow image
     * @returns {Promise<Object>}
     */

    anal() {
        return this._get(`v2/img/anal`);
    }

    /** Meow image
     * @returns {Promise<Object>}
     */

    NsfwAvatar() {
        return this._get(`v2/img/nafw_avatar`);
    }

    /** Meow image
     * @returns {Promise<Object>}
     */

    yuri() {
        return this._get(`v2/img/yuri`);
    }

    /** Meow image
     * @returns {Promise<Object>}
     */

    trap() {
        return this._get(`v2/img/trap`);
    }

    /** Meow image
     * @returns {Promise<Object>}
     */

    tits() {
        return this._get(`v2/img/tits`);
    }

    /** Meow image
     * @returns {Promise<Object>}
     */

    GirlSoloGif() {
        return this._get(`v2/img/solog`);
    }

    /** Meow image
     * @returns {Promise<Object>}
     */

    GirlSolo() {
        return this._get(`v2/img/solo`);
    }

    /** Meow image
     * @returns {Promise<Object>}
     */

    SmallBoobs() {
        return this._get(`v2/img/smallboobs`);
    }

    /** Meow image
     * @returns {Promise<Object>}
     */

    PussyWankGif() {
        return this._get(`v2/img/pwankg`);
    }

    /** Meow image
     * @returns {Promise<Object>}
     */

    PussyArt() {
        return this._get(`v2/img/pussy_jpg`);
    }

    /** Meow image
     * @returns {Promise<Object>}
     */

    LewdKemonomimi() {
        return this._get(`v2/img/lewdkemo`);
    }

    /** Meow image
     * @returns {Promise<Object>}
     */

    kitsune() {
        return this._get(`v2/img/lewdk`);
    }

    /** Meow image
     * @returns {Promise<Object>}
     */

    keta() {
        return this._get(`v2/img/keta`);
    }

        /** Meow image
     * @returns {Promise<Object>}
     */

    HoloLewd() {
        return this._get(`v2/img/hololewd`);
    }

        /** Meow image
     * @returns {Promise<Object>}
     */

    HoloEro() {
        return this._get(`v2/img/holoero`);
    }

        /** Meow image
     * @returns {Promise<Object>}
     */

    hentai() {
        return this._get(`v2/img/hentai`);
    }

        /** Meow image
     * @returns {Promise<Object>}
     */

    futanari() {
        return this._get(`v2/img/futanari`);
    }

        /** Meow image
     * @returns {Promise<Object>}
     */

    FeetGif() {
        return this._get(`v2/img/feetg`);
    }

        /** Meow image
     * @returns {Promise<Object>}
     */

    feet() {
        return this._get(`v2/img/feet`);
    }

        /** Meow image
     * @returns {Promise<Object>}
     */

    ero() {
        return this._get(`v2/img/ero`);
    }

        /** Meow image
     * @returns {Promise<Object>}
     */

    EroKitsune() {
        return this._get(`v2/img/erok`);
    }

        /** Meow image
     * @returns {Promise<Object>}
     */

    EroNeko() {
        return this._get(`v2/img/eron`);
    }

        /** Meow image
     * @returns {Promise<Object>}
     */

    EroYuri() {
        return this._get(`v2/img/eroyuri`);
    }

        /** Meow image
     * @returns {Promise<Object>}
     */

    CumArts() {
        return this._get(`v2/img/cum_jpg`);
    }

        /** Meow image
     * @returns {Promise<Object>}
     */

    blowjob() {
        return this._get(`v2/img/blowjob`);
    }

    /**
     * @private
     * @param {string} endpoint
     * @returns {Promise<Object>}
     */

    _get(endpoint) {
        return new Promise((resolve, reject) => {
            snek.get(`https://nekos.life/api/${endpoint}`)
                .set("Key", this.key)
                .then(res => {
                    if (res.status !== 200) return reject(res);
                    return resolve(res.body);
                }).catch(err => reject(err));
        });
    }

};
