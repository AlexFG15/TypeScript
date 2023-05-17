import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('charmander');
 charmander.publicApi = 'https://google.com';






  //intento de agregar una propiedad mediaante el prototype está sera bloqueda en el dcorador 
// (Pokemon.prototype as any).custoName('Pikachu');


  //generics whit axios doucmento get-pokemon.ts
// import { getPokemon } from "./generics/get-pokemon";

//  getPokemon(4)
//           .then( pokemon => console.log(pokemon.sprites.front_default))
//           .catch( error => console.error(error))
//           .finally( () => console.log('Fin getPokemon')) 


