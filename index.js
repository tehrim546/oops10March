"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}
class Dev extends Person {
    profession;
    constructor(name, age, profession) {
        super(name, age);
        this.profession = profession;
    }
    speak() {
        console.log(`My name is ${this.name} and i am a ${this.profession}`);
    }
}
const generalPerson = new Person("Zahra", 35);
const developer = new Dev("Zahra", 35, "Web Developer");
generalPerson.speak();
developer.speak();
generalPerson.speak();
