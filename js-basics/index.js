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

let name = 'Mohamed';

let message = 'some kind of messages \n anoter line on tne message and Hi ' + name + ' Welcome';
console.log(message);


let another = `some kind of messages 
  another line on the message ${name} welcome 
  ${1 + 1000} do what ever u want here it well take the style what u doing and print it on the screen `;
  console.log(another);