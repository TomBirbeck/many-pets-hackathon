import fetch from 'node-fetch';


export async function getBreed(species, breed) {
    console.log("getbreed called: ", species, breed);
    let url = `https://api-ninjas.com/api/v1`;
    let response = await fetch(`${url}/${species}?name=${breed}`, {
        "method": "GET",
        "headers": {
            "X-Api-Key": process.env.API_KEY
        }
    });
    console.log("response: ", response);
    let data = await response.json();
    console.log(data);
    return data;
}
