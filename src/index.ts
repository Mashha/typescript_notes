// basic types
let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "hello";
let age: number;

//array of numbers
let ids: number[] = [1, 2, 3, 4, 5];
ids.push(6);

//multiple types
let arr: any[] = [1, true, "hello"];

// tuple, specify exact types in array
let person: [number, string, boolean] = [1, "h", true];

// tuple array
let employee: [number, string][];
employee = [
  [1, "hello one"],
  [1, "hello two"],
  [1, "hello three"],
];

// union
//string or a number
let pid: string | number = 22;
pid = 22;

//enum
// define numeric

enum Direction1 {
  up = 1,
  down,
  left,
  right,
}

enum Direction2 {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}

// object
// one version 
// const user: {
//   id: number;
//   name: string;
// } = {
//   id: 1,
//   name: "john",
// };

//or a little less messy
type User = {
    id: number
    name: string
}

const user: User = {
    id: 1,
    name: "john"
}


// type assertion (treat as a different type)

let cid: any = 1
//let customerId = <number>cid
//or
let customerId = cid as number;

// functions - with the return value
function addNum(x: number, y: number): number{
    return x + y
}

// no return
function log(message: string | number):void{
    console.log(message)
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


//type can be used with primitives and unions
// interface with objects
type Point = number | string
const p1: Point = 1


interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x+y
const sub: MathFunc = (x: number, y: number): number => x-y


interface PersonInterface {
    id: number
    name: string
    register(): string
}


class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id
        this.name = name
     }
 
     // we can have other methods 
     register(){
         return `${this.name} is registered`
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
const brad = new Person(1, "brad")
console.log(brad.register())


// extend the class

class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, "shawn", "dev")
// register is in person class that was extended
console.log(emp.register())

// generics
// instead of using any, which would mean we can push up any type, we use T anf then specify the type in numArr and strArr variables
function getArray<T>(items: T[]): T[]{
 return new Array().concat(items)
}

// we want array of numbers and array of strings and combine
const numArr = getArray<number>([1,2,3,4])
const strArr = getArray<string>(["brad", "john", "jill"])

console.log(numArr)
getArray(numArr)
