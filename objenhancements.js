//same keys and values

const createInstructor = (firstName, lastName) => ({ firstName, lastName });

//computed property names
let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

//obj methods

const instructor2 = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + "says bye!";
  },
};

//create animal
const createAnimal = (species, verb, noise) => {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
};
