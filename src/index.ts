import { createConnection } from "typeorm";
import express from "express";
import { Person } from "./entities/Person";
import { PersonUpdated } from "./entities/PersonUpdated";
import { insertToDBRouter } from "./routers/insert_to_db";
import { generateCSVRouter } from "./routers/generate_csv";
import { password, db_port, username, HOST_PORT } from "../config";

const app = express();

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: db_port,
      username: username,
      password: password,
      database: "typeorm",
      entities: [Person, PersonUpdated],
      synchronize: true,
    });

    console.log("PostgreSQL Connected");

    app.use(express.json());

    app.use(insertToDBRouter);
    app.use(generateCSVRouter);

    app.listen(HOST_PORT, () => {
      console.log(`Now running on port ${HOST_PORT}`);
    });
  } catch (e) {
    console.error(e);
    throw new Error("Failed to connect to PostgreSQL");
  }
};

main();
