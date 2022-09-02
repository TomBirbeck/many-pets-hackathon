//

export async function getBreed (species,breed) {
    let url = `https://api-ninjas.com/api/v1`
    let data =await fetch(`${url}/${species}?name=${breed}`)
    let response = await data.json()
    console.log(response)
    return response
}