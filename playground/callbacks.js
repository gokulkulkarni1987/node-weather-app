var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Gokul'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(4, (user) => {
  console.log(user);
});