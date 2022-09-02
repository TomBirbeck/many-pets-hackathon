//
import express from "express";
// import { functions } from "../models/index.js";

const petRouter = express.Router();

// petRouter.get("/", async function (req, res) {
//     const RESULT = await getUserFeedback();
//     res.json({ success: true, message: "All feedback", payload: RESULT })
// })

petRouter.get("/", async function (req, res) {
  // const RESULT = await getUserFeedback();

  res.json({ success: true, message: "blank for now", payload: RESULT });
});
/*
let species = req.body.species;
  let breed = req.body.breed;
  let name = req.body.name;
  let age = req.body.age;
  let address = req.body.address;

  if multiple pets
*/
//API's
/* https://api-ninjas.com/api/dogs */
export default petRouter;
