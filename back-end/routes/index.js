//
import express from "express";
import { getBreed } from "../models/index.js";

const petRouter = express.Router();

// petRouter.get("/", async function (req, res) {
//     const RESULT = await getUserFeedback();
//     res.json({ success: true, message: "All feedback", payload: RESULT })
// })

petRouter.post("/", async function (req, res) {
    // const RESULT = await getUserFeedback();
    let species = req.body.species;
    let breed = req.body.breed;
    let name = req.body.name;
    let age = req.body.age;
    let address = req.body.address;
    let result = getBreed(species, breed);
    res.json({ success: true, message: "blank for now", payload: result });
});

/*
   if multiple pets
*/

/*

*/

//API's
/* https://api-ninjas.com/api/dogs */
export default petRouter;
