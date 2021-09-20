const csv = require("csv-parser");
const fs = require("fs");

const res: object[] = [];

fs.createReadStream("src/sampleData/samplecsv20k.csv")
  .pipe(csv())
  .on("data", (data: object) => res.push(data))
  .on("end", () => {
    console.log(res);
  });
