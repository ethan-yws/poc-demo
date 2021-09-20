import express from "express";
import { PersonUpdated } from "../entities/PersonUpdated";
import { ageFilter } from "../pipelines/filters/ageFilter";
import { csvReader } from "../utilities/csvReader";

const router = express.Router();

router.post("/api/insert2DB", async (req, res) => {
  const start = performance.now();

  const file_path = "src/sampleData/data20k.csv";
  const data = csvReader(file_path);
  const dataRes = ageFilter(data, 20);

  dataRes.forEach((el) =>
    PersonUpdated.create({
      id: el.id,
      firstName: el.firstName,
      lastName: el.lastName,
      age: el.age,
      birthday: el.birthday,
      dollar: el.dollar,
    }).save()
  );

  const stop = performance.now();
  const inSeconds = (stop - start) / 1000;
  const rounded = Number(inSeconds).toFixed(3);

  res.send(`Mapped updated data into Postgre DB in ${rounded}s`);
});

export { router as insertToDBRouter };
// id, firstName, lastName, age, birthday, dollar;
