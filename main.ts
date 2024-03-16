import { searchForAsterisk } from "./searchForAsterisk";
const jsonToVerify : any = require('./json/jsonToVerify.json')

console.log(searchForAsterisk(JSON.stringify(jsonToVerify)))