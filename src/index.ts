let name: string = "Pius";

console.log(name)

let count: number = 10

name = 'Paul';

console.log(name)

count  = 5

import travisLog, {Gender, IPersonData, Person} from './tools'
/*
const person1 = new Person(
    "Faithia",
    "Salaudin",
    "female",
    1.7,
    ["singing","baking","etc"],
     new Date("1990-08-08"),
     true
);*/ //this is becasue if we use interface it will not work, not its own person

const person1Data: IPersonData = {
    firstName: "Kiki",
    lastName: "Ohanugo", 
    gender: Gender.F,
    height: "1.5",
    hobbies: ["singing","baking","etc"],
    birthday: new Date("2004-11-09"), 
    isAlive: true 
}

const person1 = new Person(person1Data);

//const pronoun = person1.gender === "male" ? "He" : "She";

const pronoun = person1.gender === Gender.M ? "He" : "She";

travisLog(`The first person is ${person1.firstName} ${person1.lastName},
${person1.gender === "female"? "She":"He"} likes ${person1.hobbies.join(",")}. ${pronoun} was born on
${person1.birthday.toLocaleDateString("en-NG")}`);
 //type annotation can olny be recognised in typecript//
 //enum and interface are ways of arraninging clss, interface is like a class without method so it will only need properties, quick way of
 //of grouping classes
 //I want gentder one for male one for female, not wanting to wait space, use numbers as its more efficent