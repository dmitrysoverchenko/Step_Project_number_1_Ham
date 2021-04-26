"use strict";

const user = createNewUser();
function createNewUser() {
  const newUser = {
    userFirstName: prompt("enter user's first name"),
    userLastName: prompt("enter user's second name"),
    userBirthDate: prompt("enter user's date of birth (dd.mm.yyyy)"),
    getLogin: function () {
      return this.userFirstName[0] + this.userLastName;
    },
    getAge: function () {
      const now = new Date();
      const currentYear = now.getFullYear();
      const userDate = new Date(
        +this.userBirthDate.substring(6, 10),
        +this.userBirthDate.substring(3, 5) - 1,
        +this.userBirthDate.substring(0, 2)
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
