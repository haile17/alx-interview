#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const filmEndPoint = 'https://swapi-api.hbtn.io/api/films/' + movieId;
let people = [];
const names = [];

const requestCharacters = async () => {
  await new Promise(resolve => request(filmEndPoint, (err, res, body) => {
    if (err || res.statusCode !== 200) {
<<<<<<< HEAD
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
