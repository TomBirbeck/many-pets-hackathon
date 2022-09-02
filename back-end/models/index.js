import { json } from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';

export async function getBreed(species, breed) {
  console.log('getbreed called: ', species, breed);
  let url = `https://api.api-ninjas.com/v1`;
  let response = await fetch(`${url}/${species}?name=${breed}`, {
    method: 'GET',
    headers: {
      'X-Api-Key': process.env.API_KEY,
      'Content-Type': 'application/json',
    },
  });
  //   console.log('response: ', response);
  let pass;
  let data = await response.json();
  if (data.length > 0) {
    pass = data;
  } else {
    pass = `Failed to find ${breed} of ${species}`;
  }
  console.log('data', data);
  return pass;
}
export async function getAddress(number, postcode) {
  console.log('getAddress called: ', postcode);
  const postcode2 = postcode.replaceAll(' ', '%20');
  const apikey = process.env.ADD_API_KEY;
  let url = `https://ws.postcoder.com/pcw/${apikey}/address/uk/${postcode2}`;
  let response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('response: ', response);
  let data = await response.json();
  console.log('data', data);
  let foundAddress = data.find((e) => {
    return Number(e.number) === number;
  });
  console.log(foundAddress);
  if (foundAddress) {
    return foundAddress.summaryline;
  } else {
    return `Failed to find postcode of ${postcode} please enter a valid postcode`;
  }
  //   let data;
  //   if (response.length > 0) {
  //     data = await response.json();
  //   } else {
  //     data = `Failed to find postcode of ${postcode} please enter a valid postcode`;
  //   }
  //   return foundAddress;
}
//
