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
        return this._get(`/pat`);
    }
    /** Hug image
     * @returns {Promise<Object>}
     */

    hug() {
        return this._get(`/hug`);
    }
    /** Kiss <3 image
     * @returns {Promise<Object>}
     */
    kiss() {
        return this._get(`/kiss`);
    }
    /** oWo Neko <3 image
     * @returns {Promise<Object>}
     */
    neko() {
        return this._get(`/neko`);
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
        return this._get(`/lizard`);
    
    }

    /** Slap image
     * @returns {Promise<Object>}
     */

    slap() {
        return this._get(`/slap`);
    }

    /** Poke image
     * @returns {Promise<Object>}
     */

    poke() {
        return this._get(`/img/poke`);
    }

    /**
     * @private
     * @param {string} endpoint
     * @returns {Promise<Object>}
     */

    _get(endpoint) {
        return new Promise((resolve, reject) => {
            snek.get(`https://nekos.life/api/v2${endpoint}`)
                .set("Key", this.key)
                .then(res => {
                    if (res.status !== 200) return reject(res);
                    return resolve(res.body);
                }).catch(err => reject(err));
        });
    }

};
