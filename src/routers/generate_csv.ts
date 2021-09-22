import express from "express";
import { ageFilter } from "../pipelines/filters/ageFilter";
import { csvReader } from "../utilities/csvReader";

const router = express.Router();

router.get("/api/generateCSV", (req, res) => {
  const file_path = "src/sampleData/data100k.csv";
  const data = csvReader(file_path);
  const dataRes = ageFilter(data, 20);

  res.send(dataRes);

  // TODO: wirte dataRes into csv file
});

export { router as generateCSVRouter };
