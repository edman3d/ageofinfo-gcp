const fs = require("fs");
const csv = require("csvtojson/v2");

const unitCsvFilePath = "src/data/rawData/aoe2_de_v3_units.csv";
const techsCsvFilePath = "src/data/rawData/aoe2_de_v3_techs.csv";
const buildingsCsvFilePath = "src/data/rawData/aoe2_de_v3_buildings.csv";
const civsCsvFilePath = "src/data/rawData/aoe2_de_v3_civs.csv";

async function parseAndWriteData() {
  // Parse and write Units
  const unitsArray = await csv().fromFile(unitCsvFilePath);
  fs.writeFile("src/data/rawData/units.json", JSON.stringify(unitsArray), (err) => {
    if (err) console.log(err);
    else {
      console.log("Units file written successfully\n");
    }
  });

  // Parse and write Technologies
  const techsArray = await csv().fromFile(techsCsvFilePath);
  fs.writeFile("src/data/rawData/techs.json", JSON.stringify(techsArray), (err) => {
    if (err) console.log(err);
    else {
      console.log("Techs file written successfully\n");
    }
  });

  // Parse and write Buildings
  const buildingsArray = await csv().fromFile(buildingsCsvFilePath);
  fs.writeFile("src/data/rawData/buildings.json", JSON.stringify(buildingsArray), (err) => {
    if (err) console.log(err);
    else {
      console.log("Buildings file written successfully\n");
    }
  });

  // Parse and write Civilizations
  const civsArray = await csv().fromFile(civsCsvFilePath);
  fs.writeFile("src/data/rawData/civs.json", JSON.stringify(civsArray), (err) => {
    if (err) console.log(err);
    else {
      console.log("Civs file written successfully\n");
    }
  });
}

parseAndWriteData();
