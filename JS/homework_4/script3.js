"use strict";

const user = createNewUser();
function createNewUser() {
  const newUser = {
    firstName: prompt("enter user's first name"),
    lastName: prompt("enter user's second name"),
    getLogin: function () {
      return newUser.firstName[0] + newUser.lastName;
    },
  };
  return newUser;
}

console.log(`your login is: ${user.getLogin()}`);
