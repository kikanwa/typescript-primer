export enum Gender {
    F = "female",
    M = "male"
}
export interface IPersonData { 
    firstName: string, 
    lastName: string,
   //gender: "male" | "female",
    gender: Gender,
    hobbies: string[]; 
    height?: any, //question mark here means optional hobbies: string[],
    birthday?: any, //question mark here means optional 
    isAlive: boolean
    }
    //tying to see how it makes things easier, what i expect of any of this is for person, use I for interface, it saves us from
export class Person {
 //declare property types 
    firstName: string; 
    lastName: string; 
   //gender: "male" | "female";
    gender: Gender;
    height: number; 
    hobbies: string[]; 
    birthday: Date;
    isAlive: boolean;//
    //constructor(firstName: string, lastName: string, gender: "male" | "female", height: number, hobbies: string[], birthday: Date, isAlive: boolean,) {
       // this.firstName = firstName; 
       // this.lastName = lastName; 
        //this.gender = gender; 
        //this.height = height; 
        //this.hobbies = hobbies; 
        //this.birthday = birthday; 
        //this.isAlive = isAlive;
    //}
    constructor(personData: IPersonData){
        this.firstName = personData.firstName; 
        this.lastName = personData.lastName; 
        this.gender = personData.gender; 
        this.height = personData.height; 
        this.hobbies = personData.hobbies; 
        this.birthday = personData.birthday; 
        this.isAlive = personData.isAlive;
    }
};

const travisLog = (output: string) => {
    console.log(output);
}

export default travisLog;
//arguments being passed, goign to expect a string from first name, log is an automaitc thingy asper if its travis log, travis log everywhere//
//Data enumerration 
//opionate framework, opniojn on how you should do things, nest jsymakes things easier , doesn't give too much room to decied on things unlike waf but oddo doesn't even do anythign , express is the first but koa not as popluar, koa not as popluar, express is th most basic