  
import Book from "./entities/book";
import Periodical from "./entities/exer5";
import Person, { gender } from "./entities/person";

let person1 = new Person('primeiro autor', new Date('1965-12-31T00:00:00'), Gender.Male)
let person2 = new Person('segundo autor', new Date('1564-04-23T00:00:00'), Gender.Male)
let person3 = new Person('terceiro autor', new Date('1965-07-31T00:00:00'), Gender.Female)

let book1 = new Book('primeiro livro', 'segundo livro', new Date('2002-12-31T00:00:00'), person1)
let book2 = new Book('terceiro livro', 'quarto livro', new Date('2002-04-23T00:00:00'), person2)
let book3 = new Book('quinto livro', 'sexto livro', new Date('1700-07-31T00:00:00'), person2)

let periodical1 = new Periodical(8000, 10, 25, 'Estante Virtual', 'ISTO É',  new Date('2020-11-2T00:00:00'), person1)
let periodical2 = new Periodical(7800, 10, 25, 'Estante Virtual', 'ISTO É',  new Date('2020-11-10T00:00:00'), person2)
let periodical3 = new Periodical(5000, 10, 25, 'Estante Virtual', 'ISTO É',  new Date('2020-11-15T00:00:00'), person2)

console.log(person1)console.log(book1)console.log(periodical1)
console.log(person2)console.log(book2)console.log(periodical2)
console.log(person3)console.log(book3)console.log(periodical3)