var fullName = (firstName: string, lastName: string): string => {
  return `${firstName} ${lastName}`;
}

console.log(fullName('John', 'Doe'));

var greet = (person: Person): string => {
  const { firstName, lastName, age, gender } = person;
  return `Hello, ${firstName} ${lastName}, You are ${age} years old and you'r ${gender}`;
}

// Language: typescript

enum Gender {
  Male = 'M',
  Female = 'F'
}

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
}

var person: Person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 35,
  gender: Gender.Male
}

console.log(greet(person));