/*Crie um arquivo com uma classe denominada Book,
a qual deve ser a exportação padrão deste arquivo,
contendo as propriedades isbn do tipo Number,
edition do tipo Number e volume do tipo Number. 
Garanta que a classe Book herde as outras propriedades a partir da classe Document.
Implemente também o construtor da classe,
o qual deve receber parâmetros equivalentes a cada propriedade da classe Document e desta própria classe,
a serem preenchidas em uma instância desta classe. 
Lembre-se que o construtor de uma classe filha deve chamar o construtor da classe pai
para enviar os parâmetros corretos a serem preenchidos como propriedades herdadas da classe pai.
Não se esqueça de importar a classe Document neste arquivo, para que ela possa ser utilizada na herança.*/

//import Gender from './Gender.js'
//Crie um arquivo com uma classe denominada Person,
// a qual deve ser a exportação padrão deste arquivo,
// contendo as propriedades name do tipo String,
// birth do tipo Date
import Document from "./document";
import gender from "./person.js";
export class Person extends document {
    public isbn: Number
    public edition: Number
    public volume: Number
    
  
    constructor(isbn: number, edition: number, volume: number,
         title: string, subtitle: string, publishedAt: Date | Number, author: Person){
        super(title, subtitle, publishedAt, author)
        this.isbn = isbn
        this.edition = edition
        this.volume = volume
        }
  
    
  }
    
  }
  
  export default Person