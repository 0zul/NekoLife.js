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
        return this._get(`/why`);
    }
    /** LewdNeko <3 image
     * @returns {Promise<Object>}
     */
    LewdNeko() {
        return this._get(`/lewd/neko`);
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

     /** Poke image
     * @returns {Promise<Object>}
     */

    poke() {
        return this._get(`v2/img/poke`);
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

    erofeet() {
        return this._get(`v2/img/erofeet`);
    }

 /** Meow image
     * @returns {Promise<Object>}
     */

    meow() {
        return this._get(`v2/img/meow`);
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
