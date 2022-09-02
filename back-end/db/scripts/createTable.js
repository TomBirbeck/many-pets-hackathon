//
import pool from "../index.js";

export async function createPetsTable() {
  const sqlString = `CREATE table IF NOT EXISTS pets (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    species TEXT not null,
    breed TEXT not null,
    age INT not null,
    postcode TEXT not null,
    house TEXT not null
    )`;
  const res = await pool.query(sqlString);
  console.log(res.command);
}
