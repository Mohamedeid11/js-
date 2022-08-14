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


function Stopwatch(){

    let startTime = 0; 
    let endTime = 0;  
    let running = 0 ;
    let durationTime = 0 ;

    this.start = function (){
        if (running)
            throw new Error('already started')

        running = true;

        var current = new Date();

        startTime = current.getSeconds();
    };

    this.stop = function(){
        if(!running)
            throw new Error('you need to start first');

        running = false;
        
        var date = new Date();

        endTime = date.getSeconds();
    };

    this.duration = function(){

        if(startTime == 0)
           throw new Error('you need to start first');

        if(endTime == 0)
            throw new Error('You need to stop the watch first');

        durationTime = (endTime - startTime);

        console.log(durationTime);

        running = false;

    };

    this.reset = function() {
        startTime = 0;
        endTime = 0 ;
        running = false;
        durationTime = 0;
    }
}

var sw = new Stopwatch()



