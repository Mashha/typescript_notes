"use strict";
// basic types
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "hello";
let age;
//array of numbers
let ids = [1, 2, 3, 4, 5];
ids.push(6);
//multiple types
let arr = [1, true, "hello"];
// tuple, specify exact types in array
let person = [1, "h", true];
// tuple array
let employee;
employee = [
    [1, "hello one"],
    [1, "hello two"],
    [1, "hello three"],
];
// union
//string or a number
let pid = 22;
pid = 22;
//enum
// define numeric
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 1] = "up";
    Direction1[Direction1["down"] = 2] = "down";
    Direction1[Direction1["left"] = 3] = "left";
    Direction1[Direction1["right"] = 4] = "right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["down"] = "down";
    Direction2["left"] = "left";
    Direction2["right"] = "right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "john"
};
// type assertion (treat as a different type)
let cid = 1;
//let customerId = <number>cid
//or
let customerId = cid;
// functions - with the return value
function addNum(x, y) {
    return x + y;
}
// no return
function log(message) {
    console.log(message);
    // }
    // // interface
    // interface Person {
    //     //can also assign read only
    //     readonly id: number,
    //     name: string,
    //     age?: number // optional property
    // }
    // const user1: Person = {
    //     id: 1,
    //     name: "john"
}
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // we can have other methods 
    register() {
        return `${this.name} is registered`;
    }
}
// classes
// class PersonName {
//     id: number
//     name: string
//     constructor(id: number, name: string){
//        this.id = id
//        this.name = name
//     }
//     // we can have other methods 
//     register(){
//         return `${this.name} is registered`
//     }
// }
// constructor runs as soon as we initialize the object
const brad = new Person(1, "brad");
console.log(brad.register());
// extend the class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "shawn", "dev");
// register is in person class that was extended
console.log(emp.register());
// generics
// instead of using any, which would mean we can push up any type, we use T anf then specify the type in numArr and strArr variables
function getArray(items) {
    return new Array().concat(items);
}
// we want array of numbers and array of strings and combine
const numArr = getArray([1, 2, 3, 4]);
const strArr = getArray(["brad", "john", "jill"]);
console.log(numArr);
getArray(numArr);
