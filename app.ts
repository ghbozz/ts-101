// Button
const btn = document.querySelector('button') as HTMLButtonElement;
const title = document.querySelector('h1') as HTMLHeadingElement;

btn.addEventListener('click', (): void => {
  title.textContent = 'Typescript 101';
})

// Math
const num1 = document.querySelector('#num1') as HTMLInputElement;
const num2 = document.querySelector('#num2') as HTMLInputElement;

const add = (num1: number, num2: number): number => {
  return num1 + num2;
}

[num1, num2].forEach((input) => {
  input.addEventListener('input', (): void => {
    const result = add(+num1.value, +num2.value);
    document.querySelector('#result').textContent = result.toString();
  })
})

// Name
const nameInput = document.querySelector('#name-input') as HTMLInputElement;
const nameSpan = document.querySelector('#name-span') as HTMLSpanElement;

nameInput.addEventListener('input', (): void => {
  nameSpan.innerText = nameInput.value;
})

// Hello
const greet = (name: string): void => {
  if (name === '') {
    console.log('Hello, World! 🌍');
    return
  }

  console.log('Hello ' + name + '! 👋');
}

const helloBtn = document.querySelector('#hello-btn') as HTMLButtonElement;
helloBtn.addEventListener('click', (): void => {
  greet(nameSpan.innerText);
})

// Enum
enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 'READ_ONLY',
  AUTHOR = 'AUTHOR'
}

interface Person {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
}

const person: Person = { 
  name: 'John', 
  age: 30,
  hobbies: ['Sports', 'Cooking'], 
  role: Role.ADMIN 
};

console.log(person);

// Union
type Combinable = string | number;

const addNumbersAndStrings = (
  a: Combinable, 
  b: Combinable,
  convertion: 'as-number' | 'as-string'
  ) => {
  if (convertion === 'as-number') {
    a = +a;
    b = +b;
  } else {
    a = a.toString() 
    b = b.toString();
  }

  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  return a.toString() + b.toString();
}

console.log(addNumbersAndStrings(1, 2, 'as-number'));
console.log(addNumbersAndStrings('a', 'b', 'as-string'));
console.log(addNumbersAndStrings('5', '5', 'as-number'));

// Functions as types

const combineValues: (a: Combinable, b: Combinable, convertion: 'as-number' | 'as-string') => Combinable = addNumbersAndStrings;

console.log(combineValues(1, 2, 'as-number'));
console.log(combineValues(1, 2, 'as-string'));