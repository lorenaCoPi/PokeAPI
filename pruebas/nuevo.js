const form$$ = document.querySelector("form");
const pokemonContainer$$ = document.getElementById("container");

let vacio = [];

const getPokemon = async () => { 
    const response1 = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151/")
    const res1 = await response1.json()
    //console.log(res1);
    for (pokemon of res1.results) {
       const response2 = await fetch(pokemon.url)
       const res2 = await response2.json()
       vacio.push(res2);
       //console.log(res2);        
    }
return vacio;
}

const mapCharacters = (characters) => { 
    //console.log(characters);
    return characters.map((character) => ({
       nombre: character.name,
        imagen: character.sprites.front_default,
        peso: character.weight,
        tipo: character.types[0].type.name,            
    })
)}

const html = (characters) => {
pokemonContainer$$.innerHTML = "";
for (const character of characters) {
`
        <ul class="cards">
        <li class="${character.types[0].type.name}">
        <h1 class="card-title">${character.name}</h1>
        <img src=${character.sprites.front_default} class="card-image"/>
        <p class="orden">Su id en la pokédex es: ${data.id}</p>
        <p class="peso">Su peso es: ${character.weight} kg</p>
        <p class"tipo">Este pokemon es de tipo ${character.types[0].type.name}</p>
        </div>
        </div>`;
          pokemonContainer$$.innerHTML += html;          
        }return html
    }

const init = async () => { 
    const characters = await getPokemon ();
    const mapedCharacters = mapCharacters(characters);
    html(mapedCharacters);

    //takeInput(mapedCharacters);
}
init();