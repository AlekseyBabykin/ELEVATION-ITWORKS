import { getUsers, insertUser, getUserByEmail, updateUserByEmail, deleteUserByEmail } from './service/user.service.js';

const someUser = ['test1@test1', 'test2@test2', 'test3@test3', 'test4@test4', 'test5@test5'];

insertUser('test@test')
  .then((data) => console.log(data))
  .catch((error) => {
    console.error(error);
  });

getUsers()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

getUserByEmail('test@test')
  .then((data) => console.log(data))
  .catch((error) => {
    console.error(error);
  });

updateUserByEmail('test@test', 'update@update')
  .then((data) => console.log(data))
  .catch((error) => {
    console.error(error);
  });

deleteUserByEmail('update@update')
  .then((data) => console.log(data))
  .catch((error) => {
    console.error(error);
  });

function init() {
  someUser.forEach((i) => insertUser({ email: i }));
}
init();
