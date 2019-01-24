const people = [
  { name: 'Nader', age: 36 },
  { name: 'Amanda', age: 24 },
  { name: 'Jason', age: 44 },
];

// export default () => {
//   return new Promise((resolve, reject) => {
//     return resolve(people);
//   });
// };

// Send default anonymous function from api.js where it returns a promise to resolve a fetch to transtar api

export default () => {
  return new Promise((resolve, reject) => {
    return resolve(
      fetch('https://map-suite-mobile.firebaseapp.com/transtar')
        .then((response) => {
          return response.json();
        })
        .then((responseJSON) => {
          return responseJSON.message;
        })
        .catch((error) => {
          console.log(error);
        })
    );
  });
};
