class API {
  getCharacter(id) {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => data);
  }
}

const api = new API();

export default api;
