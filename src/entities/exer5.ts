/*Crie um arquivo com uma classe denominada Periodical,
a qual deve ser a exportação padrão deste arquivo, 
contendo as propriedades issn do tipo Number,
volume do tipo Number e issue do tipo Number.
Garanta que a classe Periodical herde as outras propriedades a partir da classe Document. 
Implemente também o construtor da classe,
o qual deve receber parâmetros equivalentes a cada propriedade da classe Document e desta própria classe,
a serem preenchidas em uma instância desta classe.
Lembre-se que o construtor de uma classe filha deve chamar o construtor da classe pai
 para enviar os parâmetros corretos a serem preenchidos como propriedades herdadas da classe pai.
  Não se esqueça de importar a classe Document neste arquivo, para que ela possa ser utilizada na herança.*/

  import Document from './document';
  import {pubAt} from './document.js';
  import Person from './person.js';
  
  export class Periodical extends Document{
      issn: number
      volume: number
      issue: number
  
  constructor (issn: number, volume: number, issue: number, title: string, subtitle: string, publishedAt: pubAt, author: Person){
      super(title, subtitle, publishedAt, author)
      this.issn = issn
      this.volume = volume
      this.issue = issue
      }
  }
  export default Periodical