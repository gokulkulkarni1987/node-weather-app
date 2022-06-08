console.log('Starting app');

setTimeout(() => {
  console.log('inside of callback');
}, 2000);

setTimeout(() => {
  console.log('second worked');
}, 0);

console.log('Finishing the app');