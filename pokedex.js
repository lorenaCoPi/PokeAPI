const pokemonContainer$$ = document.getElementById("container");
//let input$$ = document.getElementById("pokedex").value.toLowerCase();
let button$$ = document.querySelector("button");

const getPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151/`)
      .then((response) => {
    return response.json();
  }).then((data) => {
    for(let pokemon of data.results) {
      fetch(pokemon.url)
        .then((response)=> response.json())
        .then((data) => {
        const mapType = data.types.map((type) => type.type.name).join(", ");
        const html = `
        <ul class="cards">
        <li class="${data.types[0].type.name}">
        <h1 class="card-title">${data.name}</h1>
        <img src=${data.sprites.front_default} class="card-image"/>
        <p class="orden">Su id en la pokédex es: ${data.id}</p>
        <p class="peso">Su peso es: ${data.weight} kg</p>
        <p class"tipo">Este pokemon es de tipo ${mapType}</p>
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

getPokemon();

button$$.addEventListener("click", (event) => {
    event.preventDefault();
    let input$$ = document.getElementById("pokedex").value.toLowerCase();
    const pokemonCards = document.querySelectorAll(".cards");

    pokemonCards.forEach((div) => {
      const pokemonName = div.querySelector(".card-title").textContent.toLowerCase();
      if (pokemonName.includes(input$$)) {
        div.style.display = "inline-flex";  
        return input$$;  
      } else {
        div.style.display = "none";
      }
    });
  });
