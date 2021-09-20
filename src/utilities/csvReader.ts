import { PersonProp } from "../interfaces/person.interface";

const csv = require("csv-parser");
const fs = require("fs");

const res: PersonProp[] = [];

export const csvReader = (file_path: string): PersonProp[] => {
  fs.createReadStream(file_path)
    .pipe(csv())
    .on("data", (data: PersonProp) => res.push(data))
    .on("end", () => {
      console.log("Parsed data from CSV");
    });

  return res;
};
