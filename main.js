//by Varga Marcel,for Calogero (Efebia)


const CryptoJS = require("crypto-js");

let rawStr = "4a1b48d7322394a78326cd283f0834093e65421a7e98e90e5b452d160b5d07d8";//hexadecimal string
let wordArray = CryptoJS.enc.Hex.parse(rawStr);//library specific 'wordArray'
let base64 = CryptoJS.enc.Base64.stringify(wordArray); //base64-encoded rawStr
console.log('base64:', base64);