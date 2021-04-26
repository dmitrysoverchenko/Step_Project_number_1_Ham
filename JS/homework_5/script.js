"use strict";

const user = createNewUser();
function createNewUser() {
  let firstName = prompt("enter user's first name");
  let lastName = prompt("enter user's second name");
  let birthDate = prompt("enter user's date of birth (dd.mm.yyyy)");
  const newUser = {
    userFirstName: firstName,
    userLastName: lastName,
    userBirthDate: birthDate,
    getLogin: function () {
      return this.userFirstName[0] + this.userLastName;
    },
    getAge: function () {
      const now = new Date();
      const currentYear = now.getFullYear();
      const userBirthYear = +this.userBirthDate.substring(6, 10);
      const userBirthMonth = +this.userBirthDate.substring(3, 5);
      const userBirthDay = +this.userBirthDate.substring(0, 2);
      const userDate = new Date(
        userBirthYear,
        userBirthMonth - 1,
        userBirthDay
      );
      const userYear = userDate.getFullYear();
      let age = currentYear - userYear;
      if (now < new Date(userDate.setFullYear(currentYear))) {
        age = age - 1;
      }
      return age;
    },
    getPassword: function () {
      return (
        this.userFirstName[0].toUpperCase() +
        this.userLastName.toLowerCase() +
        this.userBirthDate.substring(6, 10)
      );
    },
  };
  return newUser;
}
console.log(`your login is: ${user.getLogin()}`);
console.log(`your password is: ${user.getPassword()}`);
console.log(`your age is: ${user.getAge()}`);
