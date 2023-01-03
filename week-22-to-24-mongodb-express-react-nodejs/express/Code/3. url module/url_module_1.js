var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var adr = 'https://www.google.com/search?q=node+js+tutorial+&ei=E_jWYv7xIIK8sAfF9a3gDw&ved=0ahUKEwi-x-DWyoX5AhUCHuwKHcV6C_wQ4dUDCA0&uact=5&oq=node+js+tutorial+&gs_lcp=Cgdnd3Mtd2l6EAMyCwgAEIAEELEDEIMBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgcIABCwAxBDOg0ILhDHARDRAxCwAxBDOgoIABDkAhCwAxgBOgoIABCxAxCDARBDOgQIABBDSgQIQRgASgQIRhgBUKQIWOEaYPseaANwAXgAgAHRBYgBrxySAQsyLTIuMC4xLjIuMpgBAKABAcgBEcABAdoBBggBEAEYCQ&sclient=gws-wiz'
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.q); //returns 'february'