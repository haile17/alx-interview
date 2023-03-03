#!/usr/bin/node
const request = require('request');
const API_URL = 'https://swapi-api.hbtn.io/api';


const movieId = process.argv[2];
const filmEndPoint = 'https://swapi-api.hbtn.io/api/films/' + movieId;
let people = [];
const names = [];

const requestCharacters = async () => {
  await new Promise(resolve => request(filmEndPoint, (err, res, body) => {
    if (err || res.statusCode !== 200) {

      console.error('Error: ', err, ' | StatusCode: ', res.statusCode);
=======
      console.error('Error: ', err, '| StatusCode: ', res.statusCode);
>>>>>>> c7c2acfa83de554da922dc56031871699b92f66e
    } else {
      const jsonBody = JSON.parse(body);
      people = jsonBody.characters;
      resolve();
    }
  }));
};

const requestNames = async () => {
  if (people.length > 0) {
    for (const p of people) {
      await new Promise(resolve => request(p, (err, res, body) => {
        if (err || res.statusCode !== 200) {
<<<<<<< HEAD
          console.error('Erroe: ', err, '| StatusCode: ', res.statusCode);
=======
          console.error('Error: ', err, '| StatusCode: ', res.statusCode);
>>>>>>> c7c2acfa83de554da922dc56031871699b92f66e
        } else {
          const jsonBody = JSON.parse(body);
          names.push(jsonBody.name);
          resolve();
        }
      }));
    }
  } else {
<<<<<<< HEAD
    console.error('Erroe: Got no characters for some reason');
=======
    console.error('Error: Got no Characters for some reason');
>>>>>>> c7c2acfa83de554da922dc56031871699b92f66e
  }
};

const getCharNames = async () => {
  await requestCharacters();
  await requestNames();

  for (const n of names) {
    if (n === names[names.length - 1]) {
      process.stdout.write(n);
    } else {
      process.stdout.write(n + '\n');
    }
  }
};

getCharNames();
=======
if (process.argv.length > 2) {
  request(`${API_URL}/films/${process.argv[2]}/`, (err, _, body) => {
    if (err) {
      console.log(err);
    }
    const charactersURL = JSON.parse(body).characters;
    const charactersName = charactersURL.map(
      url => new Promise((resolve, reject) => {
        request(url, (promiseErr, __, charactersReqBody) => {
          if (promiseErr) {
            reject(promiseErr);
          }
          resolve(JSON.parse(charactersReqBody).name);
        });
      }));

    Promise.all(charactersName)
      .then(names => console.log(names.join('\n')))
      .catch(allErr => console.log(allErr));
  });
}
<<<<<<< HEAD
>>>>>>> 03c75985bad15bf5d643ccfb14c4296c254b2033
=======
>>>>>>> a67f96f2fcbb16263db4546446ed9336b0d630a6
