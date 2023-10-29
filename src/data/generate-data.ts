const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const csv = require("csvtojson/v2");
const csvReadPath = "src/data/rawData";
const jsonWritePath = "src/data";

const unitCsvDefaultName = `${csvReadPath}/aoe2_de_data_v3 - units.csv`;
const unitCsvFilePath = `${csvReadPath}/aoe2_de_v3_units.csv`;

const techsCsvDefaultName = `${csvReadPath}/aoe2_de_data_v3 - techs.csv`;
const techsCsvFilePath = `${csvReadPath}/aoe2_de_v3_techs.csv`;

const buildingsCsvDefaultName = `${csvReadPath}/aoe2_de_data_v3 - buildings.csv`;
const buildingsCsvFilePath = `${csvReadPath}/aoe2_de_v3_buildings.csv`;

const civsCsvDefaultName = `${csvReadPath}/aoe2_de_data_v3 - civs.csv`;
const civsCsvFilePath = `${csvReadPath}/aoe2_de_v3_civs.csv`;

/**
 * Google Sheets downloads the files as such: "aoe2_de_data_v3 - units.csv"
 * but csvtojson doesn't work with spaces so we must rename the files
 */
async function renameFiles() {
  fs.rename(unitCsvDefaultName, unitCsvFilePath, function (err: any) {
    if (err) console.log(err);
  });

  fs.rename(techsCsvDefaultName, techsCsvFilePath, function (err: any) {
    if (err) console.log(err);
  });

  fs.rename(buildingsCsvDefaultName, buildingsCsvFilePath, function (err: any) {
    if (err) console.log(err);
  });

  fs.rename(civsCsvDefaultName, civsCsvFilePath, function (err: any) {
    if (err) console.log(err);
  });
}

async function parseAndWriteUnitData() {
  const unitsArray = await csv()
    .fromFile(unitCsvFilePath)
    .subscribe((jsonObj: any, index: number) => {
      return new Promise((resolve, reject) => {
        // TODO: here we can force valid data
        jsonObj.id = uuidv4();
        if (jsonObj.cost.length === 0) {
          jsonObj.cost = undefined;
        }
        if (jsonObj.attack_bonus.length === 0) {
          jsonObj.attack_bonus = undefined;
        }
        if (jsonObj.armor_bonus.length === 0) {
          jsonObj.armor_bonus = undefined;
        }
        // Convert all numbers into number types
        jsonObj.attack = Number(jsonObj.attack);
        jsonObj.build_time = Number(jsonObj.build_time);
        jsonObj.reload_time = Number(jsonObj.reload_time);
        jsonObj.attack_delay = Number(jsonObj.attack_delay);
        jsonObj.movement_rate = Number(jsonObj.movement_rate);
        jsonObj.line_of_sight = Number(jsonObj.line_of_sight);
        jsonObj.hit_points = Number(jsonObj.hit_points);
        jsonObj.min_range = Number(jsonObj.min_range);
        jsonObj.max_range = Number(jsonObj.max_range);
        jsonObj.melee_armor = Number(jsonObj.melee_armor);
        jsonObj.ranged_armor = Number(jsonObj.ranged_armor);
        jsonObj.search_radius = Number(jsonObj.search_radius);
        jsonObj.accuracy = Number(jsonObj.accuracy);
        jsonObj.blast_radius = Number(jsonObj.blast_radius);
        // Return updated JSON object
        resolve(jsonObj);
      });
    });
  fs.writeFile(`${jsonWritePath}/units.json`, JSON.stringify(unitsArray), (err: any) => {
    if (err) console.log(err);
    else {
      console.log("Units file written successfully");
    }
  });
}

async function parseAndWriteTechnologyData() {
  const techsArray = await csv()
    .fromFile(techsCsvFilePath)
    .subscribe((jsonObj: any, index: number) => {
      return new Promise((resolve, reject) => {
        // jsonObj.myNewKey = "new value";
        resolve(jsonObj);
      });
    });
  fs.writeFile(`${jsonWritePath}/techs.json`, JSON.stringify(techsArray), (err: any) => {
    if (err) console.log(err);
    else {
      console.log("Techs file written successfully");
    }
  });
}

async function parseAndWriteBuildingData() {
  const buildingsArray = await csv()
    .fromFile(buildingsCsvFilePath)
    .subscribe((jsonObj: any, index: number) => {
      return new Promise((resolve, reject) => {
        // jsonObj.myNewKey = "new value";
        resolve(jsonObj);
      });
    });
  fs.writeFile(`${jsonWritePath}/buildings.json`, JSON.stringify(buildingsArray), (err: any) => {
    if (err) console.log(err);
    else {
      console.log("Buildings file written successfully");
    }
  });
}

async function parseAndWriteCivilizationData() {
  const civsArray = await csv()
    .fromFile(civsCsvFilePath)
    .subscribe((jsonObj: any, index: number) => {
      return new Promise((resolve, reject) => {
        // jsonObj.myNewKey = "new value";
        resolve(jsonObj);
      });
    });
  fs.writeFile(`${jsonWritePath}/civs.json`, JSON.stringify(civsArray), (err: any) => {
    if (err) console.log(err);
    else {
      console.log("Civs file written successfully");
    }
  });
}

async function parseAndWriteAllCSVData() {
  // Rename files so csvtojson will work properly
  await renameFiles();

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

export {};
