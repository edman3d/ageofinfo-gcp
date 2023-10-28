/** csv file
a,b,c
1,2,3
4,5,6
*/
const csvFilePath = "src/data/rawData/aoe2_de_v3_units.csv";
const csv = require("csvtojson/v2");
// csv()
//   .fromFile(csvFilePath)
//   .then((jsonObj) => {
//     console.log(jsonObj);
//     /**
//      * [
//      * 	{a:"1", b:"2", c:"3"},
//      * 	{a:"4", b:"5". c:"6"}
//      * ]
//      */
//   });

// Async / await usage
// const jsonArray = await csv().fromFile(csvFilePath);
// console.log("derp");
// console.log(jsonArray);
async function getData() {
  const jsonArray = await csv().fromFile(csvFilePath);
  console.log(jsonArray);
}

getData();
