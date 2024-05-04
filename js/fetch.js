  const cards = document.querySelector('.cards');
  const apiUrl = "https://rickandmortyapi.com/api/character/";
  const personagens = document.getElementById('personagens');

  const defaultFilter = {
    id: '',
    name:'',
    species: '',
    gender: '',
    status: '',
    location:{name},
    page: 1
  }

  async function fetchCharacters() {
    const response = await fetch(apiUrl);
  //error
    const data = await response.json();
    console.log(data.results);
    return data.results;
  }

  async function render(data){
    data.forEach(character => {
      return cards.innerHTML += `
      <div class="card">
      <img src="${character.image}" alt="">
      <div class="cardDescription">
      <h3>${character.name}</h3>
      <span>${character.species}</span>
      <p>${character.status}</p>
      <a class="episodios" href="${character.location.url}">Descrição Individual</a>
      </div>
      </div>`;
    });
  }

  async function handleLoadMore(){
    defaultFilter.page += 1;
    const character = await fetchCharacters();
    return render(character);
  }

  function eventos() {
    personagens.addEventListener('click',handleLoadMore);
  }

  async function main(){
    const character = await fetchCharacters();
    eventos();
    return render(character);
  }

  main();