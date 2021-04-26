"use strict";

const user = createNewUser();
function createNewUser() {
  let firstName = prompt("enter user's first name");
  let lastName = prompt("enter user's second name");
  const newUser = {
    userFirstName: firstName,
    userLastName: lastName,
    getLogin: function () {
      return newUser.userFirstName[0] + newUser.userLastName;
    },
  };
  return newUser;
}
console.log(`your login is: ${user.getLogin()}`);
