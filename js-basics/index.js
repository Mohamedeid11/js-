// my first java script
// console.log('Hello World');

// var name = 'Mohame';
// var age  = 27;
// let isApproved = true;
// let firstNme = undefined;
// let lastName = null;
//
// let person = {
//     name : 'Mohamed',
//     age  : 26
// };
//
// person.name = 'Ibrahime'
// console.log(person);

// const selectedColors = ['red' , 'blue']
// selectedColors[1] = 'green'
// console.log(selectedColors);

//
// function square(number){
//     return number * number ;
// }
// square(2);
// console.log(square(2))

// function createCircle(radius){
//     return {
//         radius ,
//         draw : function draw(){
//             console.log('draw')
//         }
//     }
// }
// console.log(createCircle(1));

// function Circule(radius){
//     this.radius = radius;
//     this.draw = function (){
//         console.log('draw');
//     }
// }

// const circule = new Circule(10);

// Circule.call({} , 1);
// const circule = new Circule(1);


// var obj = {value : 10 }

// function increase(obj){
//     obj.value++;
// }

// increase(obj);

// console.log(obj);

// circule.location= 1;

// delete circule.location;

// function Circule(radius){
//     this.radius = radius;
//     this.draw = function (){
//         console.log('draw');
//     }
// }

// const circule = new Circule(10);


// for (let key in circule){
//     if (typeof circule[key] !== 'function')
//     console.log(key , circule[key]);
// }


// const keys = Object.keys(circule);
// console.log(keys);

// if('radius' in  circule)
// console.log('the radius is in the object');


// function Circule(radius){
//     this.radius = radius;
//     let defaultLocation = {x : 0 , y : 0};
    
//     let computeOptimumLocation = function(factor){
//         // 
//     }

//     Object.defineProperty(this , 'defaultLocation' , {
//         get:function(){
//             return defaultLocation ;
//         },
//         set : function(value){
//             if(!value.x || !value.y)
//             throw new Error('Invalied');
//             defaultLocation = value;
//         }
//     });

//     this.draw = function (){        
//         defaultLocation
//         // computeOptimumLocation(0.1)
//         // this.radius 
//         console.log('draw');
//     }
// }

// const circule = new Circule(10);
// circule.defaultLocation={x :1 , y : 2};
// circule.defaultLocation.y= 2;
// console.log(circule.defaultLocation)
// circule.draw()

// var message = 'This is my First my message';

// //it's a variable string and u can use it as object tooo

// console.log(message);


// ------------------------------------------------------------------------------------------------------------------------------------
                                                          // Strings

// // escape notation see the documntation

// var message = 'This is my First my \' message';

// //it's a variable string and u can use it as object tooo

// console.log(message);

// var message = 'This is my First my \n message';

// //it's a variable string and u can use it as object tooo

// console.log(message);


    // ------------------------------------------------------------------------------------------------------------------------------------
                                                          // Task

// function Stopwatch(){

//     let startTime = 0; 
//     let endTime = 0;  
//     let running = 0 ;
//     let durationTime = 0 ;

//     this.start = function (){
//         if (running)
//             throw new Error('already started')

//         running = true;

//         var current = new Date();

//         startTime = current.getSeconds();
//     };

//     this.stop = function(){
//         if(!running)
//             throw new Error('you need to start first');

//         running = false;
        
//         var date = new Date();

//         endTime = date.getSeconds();
//     };

//     this.duration = function(){

//         if(startTime == 0)
//            throw new Error('you need to start first');

//         if(endTime == 0)
//             throw new Error('You need to stop the watch first');

//         durationTime = (endTime - startTime);

//         console.log(durationTime);

//         running = false;

//     };

//     this.reset = function() {
//         startTime = 0;
//         endTime = 0 ;
//         running = false;
//         durationTime = 0;
//     }
// }

// var sw = new Stopwatch()



    // ------------------------------------------------------------------------------------------------------------------------------------
                                                          // Conditions In Java Script 
/*
    Hour 
    If Hour Between 6 am and 12 pm alert message goodMorning
    IF hour Between 12 Pm and 6 Pm alert Message Goodafternone 
    IF hour Between 6 Pm and 12pm alert Message GoodEvening
 */

    // let Hour = 17 ;

    // if( Hour >= 6 && Hour < 12){
    //   console.log("Good Morning");
    // }else if(Hour >= 12 && Hour < 18){
    //   console.log("Good Afeternoon");
    // }else{
    //   console.log("Good Evening");
    // }

    // ------------------------------------------------------------------------------------------------------------------------------------
                                                                    // Loop
    // --> initialExpression    => is the value to start the loop
    // --> condition            => the loop runs when this condition is true if it false the loop excute 
    // --> incrementExpresion   => to increment the initialExpression

    // for (initialExpression ; condition ; incrementExpresion]){}

    // for (let i = 1  ; i <= 5 ; i++){
    //   console.log('Hello World' , i)
    // }

    // for (let i = 1  ; i <= 5 ; i++){
    //   if(i % 2 != 0)
    //     console.log('hi', i)
    // }

    // ------------------------------------------------------------------------------------------------------------------------------------
                                                                    // Factory Function 
/*
  const circle = {
    radius : 1,
    location :{
      x: 1,
      y : 1
    },
    isVisble : true ,
    draw : function(){
      console.log('draw');
    }
  };       

  const circle2 = {
    radius : 1,
    location :{
      x: 1,
      y : 1
    },
    isVisble : true ,
    draw : function(){
      console.log('draw');
    }
  };          

  instead of multiplaying the obejct we could easily make a function and inhearte the proparities 
*/

// function createCircle(radius){
//   return{
//     radius : radius,
//     // draw()  ==> this equal to function draw(){}
//     draw () {
//       console.log('draw');
//     }
//   }
// }

// const circle1 = createCircle(1);
//   console.log(circle1);

// const circle2 = createCircle(2);
// console.log(circle2);


    // ------------------------------------------------------------------------------------------------------------------------------------
                                                                    // Constructor Function
// function Circl (radius) {
//   this.radius = radius;
//   this.draw = function (){
//     console.log('draw');
//   }
// }

// circl = new Circl(1)
// console.log (circl)

// circl2 = new Circl(2)
// console.log (circl2)

    // ------------------------------------------------------------------------------------------------------------------------------------
                                                                    // getter and setter 
// const person = {
//   firstName :"Mohamed",
//   lastName  : "Eid",
  
//   get fullName () {
//     return `${person.firstName} ${person.lastName}`;
//   },
//   set fullName (value){
//     const parts = value.split(' ');

//     person.firstName = parts[0];
//     person.lastName = parts[1];
//   },
// };

// person.fullName = 'Memo Dragon'; // this to deal with setter 

// console.log(person.fullName); // this to deal with getter
// console.log(person);

// ------------------------------------------------------------------------------------------------------------------------------------
                                                                    // Value vs Reference types

// let x = 10;

// let y = x;

// x = 20;

// console.log(y)


// let z = {value : 10};

// let h = x;

// z.value = 20;

// console.log(z.value)

// let number = 10;

// function increase (number){
//   number++;
// }

// increase(number);

// console.log(number);

// let obj = {value :1};

// function increase (obj){
//   obj.value++;

// }

// for(let i = 0 ; i < 10 ; i++){

//   increase(obj);
//   console.log(obj.value);
  
// }

// ------------------------------------------------------------------------------------------------------------------------------------
                                                                    // Scope Local vs Global
// let color = 'Red';
// console.log(color);


// function messages(){
//   let message1 = 'Mohamed';
//   console.log(message1);

//   if(true){
//     let color = 'Blue';
//     console.log(color);
//     let message2 = "Eid";
//     console.log(message1);
//   }

//   console.log(message2);

//   for(let i = 1 ; i <= 5 ; i++){
//     console.log(i);
//   }
//   console.log(i);

//   console.log(color);
// }

// messages();

// console.log(message1);


// ------------------------------------------------------------------------------------------------------------------------------------
                                                                    // Let vs Var vs Const

// function end(){
//   for(var x = 10 ; x > 5 ; x-- ){
//     console.log(x);
//   }
//   console.log(x);
// }
                                                                    


// function start(){
//   for(let i = 0 ; i < 5 ; i++ ){
//     console.log(i)
//   }
//   console.log(i)
// }

// end()

// start()

// Var => use to declare golbal variables 
// ES6 (ES2015) : Let , Const => to declare local variables start

// ------------------------------------------------------------------------------------------------------------------------------------
                                                                    // Cloning and object

// let circle ={
//   radius : 1 ,
//   draw()  {
//     console.log('draw');
//   }
// };

// let another = {};
// for(let key in circle ){
//  another[key] = circle[key];
// }
// console.log(another);


// let other = Object.assign({}, circle); // in this we could clone or obtain  one or more sorce object 
// console.log(other);


// let Mohamed = {...circle};  // in this we can clone or obtain just one object
// console.log(Mohamed);


// let others = Object.assign({color : 'red'}, circle); //in the Object.assign we can add to object
// console.log(others);

// ------------------------------------------------------------------------------------------------------------------------------------
                                                                    // this key word

//if the function is  Method (function part of object ) when calling this  ==> it refernces to the object it self 

// if the function not method (regular function) when calling this  ==> it references to the golbal object

// let video = {
//   title : 'a', 
//   play () {
//     console.log(this);
//   }
// }

// video.play();

// video.stop = function (){
//   console.log(this);
// };

// video.stop();


// //constructor functions 
// function playVideo(){
//   console.log(this);
// }

// playVideo();

// function Video (title){
//   this.title = title;
//   console.log(this);
// }

// let v = new Video('Mohamed');

// let videoGame = {
//   title : 'videoGame',
//   tages : ['video 1' , 'video 2' , 'video 3'],
//   show () {
//     this.tages.forEach(function (tag){
//         console.log(this.title ,tag);
//     }, this)  
//   }
// }

// videoGame.show();

// ------------------------------------------------------------------------------------------------------------------------------------
                                                                    // Template Literals

// let name = 'Mohamed';

// let message = 'some kind of messages \n anoter line on tne message and Hi ' + name + ' Welcome';
// console.log(message);


// let another = `some kind of messages 
//   another line on the message ${name} welcome 
//   ${1 + 1000} do what ever u want here it well take the style what u doing and print it on the screen `;
//   console.log(another);
// ------------------------------------------------------------------------------------------------------------------------------------
                                                                    // Array Filter 

// let numbers = [-100 , 1000, -1 , 0 , 1 , 2 , 3 ];

// let filtered = numbers.filter(function(value){
//   return value >= 0 ;
// });

// console.log(filtered);


// let filter = numbers.filter(value => value >= 0);

// console.log(filter);

// ------------------------------------------------------------------------------------------------------------------------------------
                                                                    // Array Map

// let numbers = [0 , -1, -100 , 1 , 2 , 3 , 4 ];

// let filter = numbers.filter(value => value > 0);
// console.log(filter);


// let mapping = numbers.map(value => value ); 
// console.log(mapping);


// let mapping1 = filter.map(value => ' <li> ' + value + ' </li> '); // returnint the vlues as numbers or integers
// console.log(mapping1);


// let html ='<ul> \n '+ mapping1.join(' \n ') + ' \n</ul>';
// console.log(html);


// let mappings = filter.map(value => ({key : value })); // to get the values as object
// console.log(mappings);

// let items =
//             `<ul>
//  ${numbers.filter(value => value > 0).map(value => ' <li> ' + value + ' <li> \n').join(' ')}</ul>`;         //chain constance
// console.log(items);

// ------------------------------------------------------------------------------------------------------------------------------------
                                                                    // Array Reduce

// let numbers = [-1 , 0 , 1 , 2 , 3];

// let sum = 0;

// for (let n of numbers){
//   sum +=  n;
// }

// console.log(sum);


// //previousValue is the start of index 0 in the array and then the reduce make a loop to the next index of the array 
// //currentValue  is the start of index 1 in the array and then the reduce make a loop to the next index of the array 

// let summtion = numbers.reduce((previousValue , currentValue ) => previousValue + currentValue , );
// console.log( summtion );

// // previousValue = -1 , currentValue = 0 then  previousValue = -1
// // previousValue = -1 , currentValue = 1 then  previousValue =  0
// // previousValue =  0 , currentValue = 2 then  previousValue =  2
// // previousValue =  2 , currentValue = 3 then  previousValue =  5

// ------------------------------------------------------------------------------------------------------------------------------------
                                                                    // Modern JavaScript

// var vs let vs const    when declare with const the variable is read only u can't change it with another variable 


//this key word 

let person ={
  name : 'Mohamed',
  walk(){
    console.log(this);
  }
}

person.walk();

let walk = person.walk.bind(person);  // here we put bind methode return new instnce of the function and then this point to the person object

walk();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
              //arrow function

let square = function(number){
  return number * number;
}

console.log(square(5));

let cirlcl = radius => radius *  2;

console.log(cirlcl(2));

// in the arrow function we delete the function and the {} 
// if function doesn't have pramaters (whice is number in the last example) then we just put () 
// if function have only one pramater we delete the ()
// if the function body if returnes a value we deletee the return and if have onle single line we delete the {}  

let jobs = [
   { id : 1 ,isActive : true},
   { id : 2 ,isActive : true},
   { id : 3 ,isActive : false},
  ];

let filter = jobs.filter( job => job.isActive);

console.log(filter);

let vichle = {
  move(){
    setTimeout(function (){
      console.log('this' , this);
    })
  }
}

vichle.move();

let vichle1 = {
  move(){
    setTimeout(() => console.log('this' , this)); // here in arraw function it doesn't a bind this 
  }
}

vichle1.move();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
              //object destracting 

let address = { streat : ' streats' , city : ' cities' , country : ' countries' };

// let streat = address.streat;
// let city = address.city;
// let country = address.country;

let {streat : st , country : coun} = address ; // this to get the pass the value from object to spacific variable

console.log(st , coun);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
              //spread operator

let firstArray = [ 1 , 2 , 3] ;
let secondArray = [ 4 , 5 , 6] ;

let compinedArray = [...firstArray , ...secondArray]; // you could also add more values in the array if u want [...firstArray , 1 , 'a' , ...secondArray , 3 ,'b'];
console.log(compinedArray);



let firstobject = { firstNmae : 'Mohamed'} ;
let secondobject = {secondName : ' Eid'} ;

let compinedObject = {...firstobject , ...secondobject}; // you could also add more values in the Object if u want {...firstobject , thired: value ...secondobject};
console.log(compinedObject);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
              //Classes

class Person {
  constructor(name){
    this.name = name
  }

  walk(){
    console.log('walk from main class');
  }
}

let human = new Person('Mohamed');

console.log(human.name);

/////////////////////////// inheartance

class Teacher extends Person {       // here we put extends to inheart from the other class
  constructor( name ,degree){
    super(name); //this reference to the inhearted class  and it must be added even u won't use it 
    this.degree = degree;
  }
  teach() {
    console.log(teach);
  }
}

let teacher = new Teacher('Mohamed','Programmer');
teacher.walk();
console.log('the great person is ' , teacher.name , ' and he is a ' , teacher.degree)
