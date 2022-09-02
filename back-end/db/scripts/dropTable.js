//

import pool from "../index.js";

export async function dropPetsTable() {
  const sqlString = `DROP TABLE IF EXISTS pets;`;
  const res = await pool.query(sqlString);
  console.log(res.command);
}
