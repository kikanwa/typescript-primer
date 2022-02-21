"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
//tying to see how it makes things easier, what i expect of any of this is for person, use I for interface, it saves us from
class Person {
    //constructor(firstName: string, lastName: string, gender: "male" | "female", height: number, hobbies: string[], birthday: Date, isAlive: boolean,) {
    // this.firstName = firstName; 
    // this.lastName = lastName; 
    //this.gender = gender; 
    //this.height = height; 
    //this.hobbies = hobbies; 
    //this.birthday = birthday; 
    //this.isAlive = isAlive;
    //}
    constructor(personData) {
        this.firstName = personData.firstName;
        this.lastName = personData.lastName;
        this.gender = personData.gender;
        this.height = personData.height;
        this.hobbies = personData.hobbies;
        this.birthday = personData.birthday;
        this.isAlive = personData.isAlive;
    }
}
exports.Person = Person;
;
const travisLog = (output) => {
    console.log(output);
};
exports.default = travisLog;
//arguments being passed, goign to expect a string from first name, log is an automaitc thingy asper if its travis log, travis log everywhere//
//# sourceMappingURL=tools.js.map