## PoC of Nodejs csv pipelines and mapping to PostgreSQL

### Workflow

1. Parse csv to json array
2. data processing
3. ORM transfers processed json array to PostgresSQL

### Benchmark requirement

- 20,000 records in 2 hours

### API

- integration with Nest.js

### How to start

##### install all dependencies

`npm i`

##### setup your configurations in

`src/config.ts`

##### run the server

`npm start`

##### Performance option

- Switch 'pg' to 'pg-native'
