const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: "application/json" } })
    .then(response => response.json())
    .then(data => data.joke);
};

const fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve({
        id: "7h3oGtrOfxc",
        joke: "Whiteboards ... are remarkable.",
        status: 200
    })
  })
});

test("fetchJoke retorna uma piada caso seja resolvida", () => {
  return expect(fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
});