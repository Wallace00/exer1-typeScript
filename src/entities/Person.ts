//import Gender from './Gender.js'
//Crie um arquivo com uma classe denominada Person,
// a qual deve ser a exportação padrão deste arquivo,
// contendo as propriedades name do tipo String,
// birth do tipo Date
export class Person  {
  public name: string
  public birth: Date
  

  constructor (name: string, birth: Date) {
    this.name = name
    this.birth = Date 
    
  }
class gender extends Person {
  public gender: gender | undefined;

  constructor(name: string, birth: Date, gender: gender) {
    super(name, birth);
    this.gender = 'm' | 'f';
    
  }
}
  
}

export default Person