const form$$ = document.querySelector ("form");
const pokemonContainer$$ = document.getElementById("container");
let input$$ = document.getElementById("pokedex").value.toLowerCase();
let button$$ = document.querySelector("button");
const vacio = [];

const getPokemon = (input$$) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151/${input$$}`)
      .then((response) => {
    return response.json();
  }).then((data) => {
    for(let pokemon of data.results) {
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
         // console.log(data); 
          vacio.push(data);
          //console.log(vacio); 
          /*const pokemonMap = (characters) => {
            return vacio.map((result) => {
            name: result.name});
          }
           console.log(pokemonMap);
         pokemonMap();
          let pokemonFiltered = vacio.filter(filtered => {
            filtered.name.includes(input$$);
            data(pokemonFiltered);
          });
          pokemonFiltered();
          console.log("filtro", pokemonFiltered); */
          return data;
        });
      }
   })
   .catch((error) => console.log(`Mira este error: ${error}`));
  }

  form$$.addEventListener("input", (event)  => {
    event.preventDefault();
    let input$$ = document.getElementById("pokedex").value.toLowerCase();
    console.log(input$$);
    getPokemon(input$$);
    })
getPokemon();

  
