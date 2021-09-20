import { createConnection } from "typeorm";
import express from "express";
import { Person } from "./entities/Person";
import { PersonUpdated } from "./entities/PersonUpdated";
import { insertToDBRouter } from "./routers/insert_to_db";
import { generateCSVRouter } from "./routers/generate_csv";

const app = express();

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5433,
      username: "s708800",
      password: undefined,
      database: "typeorm",
      entities: [Person, PersonUpdated],
      synchronize: true,
    });

    console.log("PostgreSQL Connected");

    app.use(express.json());

    app.use(insertToDBRouter);
    app.use(generateCSVRouter);

    app.listen(5000, () => {
      console.log("Now running on port 5000");
    });
  } catch (e) {
    console.error(e);
    throw new Error("Failed to connect to PostgreSQL");
  }
};

main();
