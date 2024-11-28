export async function getpokemons(){
    const res = await fetch("https://pokeapi.co/api/v2/pokemon")
    const data = await res.json()
    return data.results
}

export async function getPokemon(url){
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export async function getRandomPokemon(){
    const pokemons = await getpokemons();
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    return pokemons[randomIndex];
}

export function getImages(data) {
    console.log("DATA", data);
    const images = [];
    const {versions, other, ...sprites}= data.sprites;
    console.log("SPRITES", sprites);
    Object.values(sprites).forEach(value =>{
        if (value) images.push(value);
    })
    return images;
}
