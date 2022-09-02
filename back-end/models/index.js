//

export async function getBreed(species, breed) {
    console.log("getbreed called: ", species, breed);
    let url = `https://api-ninjas.com/api/v1`;
    let data = await fetch(`${url}/${species}?name=${breed}`, {
        method: "GET",
        headers: {
            "X-Api-Key": process.env.API_KEY,
        },
    });
    console.log("data: ", data);
    let response = await data.JSON();
    console.log(response);
    return response;
}
