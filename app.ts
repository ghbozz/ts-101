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