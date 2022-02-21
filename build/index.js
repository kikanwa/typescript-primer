"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
let name = "Pius";
console.log(name);
let count = 10;
name = 'Paul';
console.log(name);
count = 5;
const tools_1 = __importStar(require("./tools"));
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
const person1Data = {
    firstName: "Kiki",
    lastName: "Ohanugo",
    gender: "female",
    height: "1.5",
    hobbies: ["singing", "baking", "etc"],
    birthday: new Date("2004-11-09"),
    isAlive: true
};
const person1 = new tools_1.Person(person1Data);
const pronoun = person1.gender === "male" ? "He" : "She";
(0, tools_1.default)(`The first person is ${person1.firstName} ${person1.lastName},
${person1.gender === "female" ? "She" : "He"} likes ${person1.hobbies.join(",")}. ${pronoun} was born on
${person1.birthday.toLocaleDateString("en-NG")}`);
//type annotation can olny be recognised in typecript//
//enum and interface are ways of arraninging clss, interface is like a class without method so it will only need properties, quick way of
//of grouping classes
//# sourceMappingURL=index.js.map