const neko = require("nekolife.js");

let nekoclient = new Neko.Client(); // default api key is defaulted :D

    // Asynchronous(Async/await) examples.

    let hug = await nekoclient.hug();
    console.log(hug.url); // logs to console the url for hug gif 

    let pat = await nekoclient.pat();
    console.log(pat.url); // logs to console the url for pat gif 
  
    let kiss = await nekoclient.kiss();
    console.log(kiss.url); // logs to console the url for kiss gif  

    let neko = await nekoclient.neko();
    console.log(neko.neko); // logs to console the url for Neko picture  

    let why = await nekoclient.why();
    console.log(why.why); // logs to console a funny why joke

    let LewdNeko = await nekoclient.LewdNeko();
    console.log(LewdNeko.neko); // logs to console a LewdNeko image url

    let lizard = await nekoclient.lizard();
    console.log(lizard.url); // logs to console a lizard image url
    // ES6 promises examples.

    nekoclient.hug().then((hug) => console.log(hug.url)); // logs to console the url for hug gif 

    nekoclient.pat().then((pat) => console.log(pat.url)); // logs to console the url for pat gif

    nekoclient.kiss().then((kiss) => console.log(kiss.url)); // logs to console the url for kiss gif 

    nekoclient.neko().then((neko) => console.log(neko.neko)); // logs to console the url for a Neko picture  

    nekoclient.why().then((why) => console.log(why.why)); // logs to console a funny why joke

    nekoclient.LewdNeko().then((LewdNeko) => console.log(LewdNeko.neko)); // logs to console a LewdNeko image url

    nekoclient.lizard().then((lizard) => console.log(lizard.url)); // logs to console a lizard image url
    // The end.
