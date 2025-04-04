const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 251
const limit = 20;
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <a href="info.html"><li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li></a>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)


loadMoreButton.addEventListener('click', () =>{
    offset += limit
    
    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords ){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemonItens(offset, limit)
    }

    
})



    //oq eu fiz, peguei uma lista de pokemons, mapei esses pokemons e convertir uma lista de li e juntei esses li sem separador 

    //o map facilitou oq seria um "for"

    //o join é para juntar, essa string vazia é pra coloca a divisão sem a virgula
    