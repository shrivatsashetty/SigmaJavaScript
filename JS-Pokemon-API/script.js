
const txtPokemonName = document.getElementById("txt-pokemon-name");

const imgPokemonSprite = document.getElementById("img-pokemon-sprite");

async function getPokemonData() {
    try {

        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${txtPokemonName.value.toLowerCase()}`);
        
        if(!response.ok) {
            throw new Error(response.statusText);
        }

        let jsonData = await response.json();

        console.log("Response Type:", typeof jsonData); // object
        console.log("Response: \n", jsonData); // object
        console.log("Pokemon ID: \n", jsonData.id); // object
        console.log("Pokemon Name: \n", jsonData.name); // object
        console.log("Sprites: \n", jsonData.sprites.front_default); // object

        imgPokemonSprite.src = jsonData.sprites.front_default;
        imgPokemonSprite.style.display = "block";

    } catch (err) {
        console.log("The below Error Ocuured");        
        console.error(err);
    }
}

document.getElementById("btn-get-data").addEventListener(
    "click",
    getPokemonData
);