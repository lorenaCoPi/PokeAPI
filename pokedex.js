const form$$ = document.querySelector("form");
const pokemonContainer$$ = document.getElementById("container");


const getPokemon = () => {
  let input$$ = document.getElementById("pokedex").value.toLowerCase();
  console.log(input$$);
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151/${input$$}`)
      .then((response) => {
    return response.json();
  }).then((data) => {
    for(pokemon of data.results) {
      fetch(pokemon.url)
        .then((response)=> response.json())
        .then((data) => {
        const html = `
        <ul class="cards">
        <li class="${data.types[0].type.name}">
        <h1 class="card-title">${data.name}</h1>
        <img src=${data.sprites.front_default} class="card-image"/>
        <p class="orden">Su id en la pokédex es: ${data.id}</p>
        <p class="peso">Su peso es: ${data.weight} kg</p>
        <p class"tipo">Este pokemon es de tipo ${data.types[0].type.name}</p>
        </div>
        </div>`;
          pokemonContainer$$.innerHTML += html;
          return data;
        });
      }
   })
   .catch((error) => console.log(`Mira este error: ${error}`));
  }
  
  /*form$$.addEventListener("input", (event)  => {
  event.preventDefault();
  let input$$ = document.getElementById("pokedex").value.toLowerCase();
  //console.log(input$$);
  getPokemon(input$$);
  })*/

  getPokemon();
  