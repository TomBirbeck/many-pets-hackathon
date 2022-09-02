//
import express from 'express';
import { getBreed, getAddress } from '../models/index.js';

const petRouter = express.Router();

// petRouter.get("/", async function (req, res) {
//     const RESULT = await getUserFeedback();
//     res.json({ success: true, message: "All feedback", payload: RESULT })
// })

petRouter.post('/', async function (req, res) {
  // const RESULT = await getUserFeedback();
  //   let species = dogs;
  let species = req.body.species;
  //   let breed = dalmatian;
  let breed = req.body.breed;
  let name = req.body.name;
  let age = req.body.age;
  let number = Number(req.body.number);
  let address = req.body.address;
  let result = await getBreed(species, breed);
  let result2 = await getAddress(number, address);
  let price = 120;
  if (age <= 5) {
    price *= 1 + age * 0.05;
  } else if (age > 5 && age <= 10) {
    price *= 1 + (5 * 0.05 + (age - 5) * 0.1);
  }
  console.log(price);
  res.json({
    success: true,
    message: 'blank for now',
    payload: { price: price, breed: result, address: result2 },
  });
});

/*
   if multiple pets
*/

/*

*/

//API's
/* https://api-ninjas.com/api/dogs */
export default petRouter;
