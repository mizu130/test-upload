function getPokemon() {
    // Get the input value
    const pokemonName = document.getElementById("pokemonInput").value.toLowerCase();

    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            
            displayPokemonInfo(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Error fetching data. Please try again.');
        });
}

function displayPokemonInfo(data) {
    const pokemonInfoDiv = document.getElementById("pokemonInfo");

 
    pokemonInfoDiv.innerHTML = "";

  
    const nameElement = document.createElement("p");
    nameElement.textContent = `Name: ${data.name}`;

    const idElement = document.createElement("p");
    idElement.textContent = `ID: ${data.id}`;

    const typesElement = document.createElement("p");
    typesElement.textContent = `Types: ${data.types.map(type => type.type.name).join(', ')}`;

    const imageElement = document.createElement("img");
    imageElement.src = data.sprites.front_default;
    imageElement.alt = data.name;

  
    pokemonInfoDiv.appendChild(nameElement);
    pokemonInfoDiv.appendChild(idElement);
    pokemonInfoDiv.appendChild(typesElement);
    pokemonInfoDiv.appendChild(imageElement);
}
