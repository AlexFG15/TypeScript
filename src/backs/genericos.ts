import { printObject,gereicFunction,argumentFunctionArrow } from "../generics/generics";
import { Hero,Villian } from "../interfaces";




const deadpool = {
  name: 'Deadpoll',
  realName : 'Wade Winston Wilson',
  dangerLevel : 130
}

console.log(gereicFunction<Hero>(deadpool).realName);


  //funciones genericas documento generic.ts 
// printObject(123);
// printObject(new Date());
// printObject({a:1, b:2, c:3});
// printObject([1,2,3,4,5,6,7,8,9,10]);
// printObject('Hola Mundo');

// const name : string = 'Alejandro';

// console.log(argumentFunctionArrow(34.151618).toFixed(2));
// console.log(gereicFunction(name).toUpperCase());
// console.log(gereicFunction(new Date()).getDate());


  //imports docuemnto Hero.ts
// import { Hero as SuperHero } from "./classes/Hero"; import con alias
// import * as HeroClasses from "./classes/Hero";
// import powers from "./data/power";


//const ironman = new SuperHero('Ironman',1,55);
// const ironman = new HeroClasses.Hero('Ironman',1,55);
// console.log(ironman);

// console.log(powers);
