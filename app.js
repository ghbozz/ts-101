// Button
var btn = document.querySelector('button');
var title = document.querySelector('h1');
btn.addEventListener('click', function () {
    title.textContent = 'Typescript 101';
});
// Math
var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
var add = function (num1, num2) {
    return num1 + num2;
};
[num1, num2].forEach(function (input) {
    input.addEventListener('input', function () {
        var result = add(+num1.value, +num2.value);
        document.querySelector('#result').textContent = result.toString();
    });
});
// Name
var nameInput = document.querySelector('#name-input');
var nameSpan = document.querySelector('#name-span');
nameInput.addEventListener('input', function () {
    nameSpan.innerText = nameInput.value;
});
// Hello
var greet = function (name) {
    if (name === '') {
        console.log('Hello, World! 🌍');
        return;
    }
    console.log('Hello ' + name + '! 👋');
};
var helloBtn = document.querySelector('#hello-btn');
helloBtn.addEventListener('click', function () {
    greet(nameSpan.innerText);
});
// Enum
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'John',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
console.log(person);
// Union
