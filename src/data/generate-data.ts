const fs = require("fs");
const csv = require("csvtojson/v2");

const unitCsvFilePath = "src/data/rawData/aoe2_de_v3_units.csv";
const techsCsvFilePath = "src/data/rawData/aoe2_de_v3_techs.csv";
const buildingsCsvFilePath = "src/data/rawData/aoe2_de_v3_buildings.csv";
const civsCsvFilePath = "src/data/rawData/aoe2_de_v3_civs.csv";

async function parseAndWriteUnitData() {
  const unitsArray = await csv()
    .fromFile(unitCsvFilePath)
    .subscribe((jsonObj, index) => {
      return new Promise((resolve, reject) => {
        // TODO: here we can force valid data
        // jsonObj.myNewKey = "new value";
        // console.log(jsonObj);
        resolve();
      });
    });
  fs.writeFile("src/data/rawData/units.json", JSON.stringify(unitsArray), (err) => {
    if (err) console.log(err);
    else {
      console.log("Units file written successfully");
    }
  });
}

async function parseAndWriteTechnologyData() {
  const techsArray = await csv()
    .fromFile(techsCsvFilePath)
    .subscribe((jsonObj, index) => {
      return new Promise((resolve, reject) => {
        // jsonObj.myNewKey = "new value";
        resolve();
      });
    });
  fs.writeFile("src/data/rawData/techs.json", JSON.stringify(techsArray), (err) => {
    if (err) console.log(err);
    else {
      console.log("Techs file written successfully");
    }
  });
}

async function parseAndWriteBuildingData() {
  const buildingsArray = await csv()
    .fromFile(buildingsCsvFilePath)
    .subscribe((jsonObj, index) => {
      return new Promise((resolve, reject) => {
        // jsonObj.myNewKey = "new value";
        resolve();
      });
    });
  fs.writeFile("src/data/rawData/buildings.json", JSON.stringify(buildingsArray), (err) => {
    if (err) console.log(err);
    else {
      console.log("Buildings file written successfully");
    }
  });
}

async function parseAndWriteCivilizationData() {
  const civsArray = await csv()
    .fromFile(civsCsvFilePath)
    .subscribe((jsonObj, index) => {
      return new Promise((resolve, reject) => {
        // jsonObj.myNewKey = "new value";
        resolve();
      });
    });
  fs.writeFile("src/data/rawData/civs.json", JSON.stringify(civsArray), (err) => {
    if (err) console.log(err);
    else {
      console.log("Civs file written successfully");
    }
  });
}

async function parseAndWriteAllCSVData() {
  // Parse and write Unit Data
  await parseAndWriteUnitData();

  // Parse and write Technologies
  await parseAndWriteTechnologyData();

  // Parse and write Buildings
  await parseAndWriteBuildingData();

  // Parse and write Civilizations
  await parseAndWriteCivilizationData();
}

parseAndWriteAllCSVData();
