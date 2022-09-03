/*we add export to make the class public and readable in other files 
and we read the class in the wanted file by adding  import and the path of the file  
*/
import { Person } from "./pesone"; //here we make the persone readable

export default class Teacher extends Person {       // here we put extends to inheart from the other class
    constructor( name ,degree){
      super(name); //this reference to the inhearted class  and it must be added even u won't use it 
      this.degree = degree;
    }
    teach() {
      console.log(teach);
    }
  }