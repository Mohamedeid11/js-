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
const person = {
  firstName :"Mohamed",
  lastName  : "Eid",
  
  get fullName () {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName (value){
    const parts = value.split(' ');

    person.firstName = parts[0];
    person.lastName = parts[1];
  },
};

person.fullName = 'Memo Dragon'; // this to deal with setter 

console.log(person.fullName); // this to deal with getter
console.log(person);

