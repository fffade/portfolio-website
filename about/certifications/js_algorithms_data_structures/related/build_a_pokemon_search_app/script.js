
/* Retrieve DOM Elements */
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types"),
      health = document.getElementById("hp"),
      attack = document.getElementById("attack"),
      defense = document.getElementById("defense"),
      spAttack = document.getElementById("special-attack"),
      spDefense = document.getElementById("special-defense"),
      speed = document.getElementById("speed");

const searchInput = document.getElementById("search-input");
const searchForm = document.getElementById("search");

/* API to search for pokemon using */
const pokemonApi = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/{name-or-id}";


searchForm.addEventListener("submit", async (e) => {
  // Prevent form submission
  e.preventDefault();

  if(!searchInput.value.length) {
    alert("Please enter a name or ID");
    return;
  }

  // Extract name and validate
  const validateRegex = /[^0-9a-z]/g;
  const validatedSearch = searchInput.value.toLowerCase().replace(validateRegex, '');

  // Delete previous sprite image if existent
  const previousSprite = document.getElementById("sprite");
  if(previousSprite) {
    previousSprite.remove();
  }

  // Fetch from API
  try
  {
    const res = await fetch(pokemonApi.replace("{name-or-id}", validatedSearch));
    const data = await res.json();

    // console.log(data);

    // Display pokemon data
    pokemonName.innerHTML = data.name;
    pokemonId.innerHTML = ` #${data.id}`;

    health.textContent = data.stats.find((stat) => stat.stat.name === 'hp').base_stat;
    attack.textContent = data.stats.find((stat) => stat.stat.name === 'attack').base_stat;
    defense.textContent = data.stats.find((stat) => stat.stat.name === 'defense').base_stat;
    spAttack.textContent = data.stats.find((stat) => stat.stat.name === 'special-attack').base_stat;
    spDefense.textContent = data.stats.find((stat) => stat.stat.name === 'special-defense').base_stat;
    speed.textContent = data.stats.find((stat) => stat.stat.name === 'speed').base_stat;

    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;

    types.innerHTML = "";

    for(const type of data.types) {

      types.insertAdjacentHTML('afterbegin', `
      <span class="type ${type.type.name.toLowerCase()}">${type.type.name.toUpperCase()}</span>`);
    }

    // Add the image to the card
    const mainElement = document.querySelector('.main');
    
    mainElement.insertAdjacentHTML('beforebegin',
    `<img id="sprite" src="${data.sprites.front_default}"/>`);

  }
  // Error with search
  catch(err)
  {
    alert("Pokémon not found");
  }

});
