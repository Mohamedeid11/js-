
/*we add export to make the class public and readable in other files 
and we read the class in the wanted file by adding  import and the path of the file  
*/

export class Person {
    constructor(name){
      this.name = name
    }
  
    walk(){
      console.log('walk from main class');
    }
  }