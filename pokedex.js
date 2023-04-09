//const form$$ = document.querySelector ("form");
const pokemonContainer$$ = document.getElementById("container");
let input$$ = document.getElementById("pokedex").value.toLowerCase();
let button$$ = document.querySelector("button");

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
          return data;
        });
      }
   })
   .catch((error) => console.log(`Mira este error: ${error}`));
  }

getPokemon(input$$);

button$$.addEventListener("click", (event) => {
    event.preventDefault();
    let input$$ = document.getElementById("pokedex").value.toLowerCase();
    const pokemonTarjetas = document.querySelectorAll(".cards");

    pokemonTarjetas.forEach((div) => {
      const pokemonName = div.querySelector(".card-title").textContent.toLowerCase();
      if (pokemonName.includes(input$$)) {
        div.style.display = "flex-inline";  
        return input$$;  
      } else {
        div.style.display = "none";
        //return getPokemon();
      }
    });
  });
