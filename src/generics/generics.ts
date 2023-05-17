

export const printObject = ( argument : any ) => {
  console.log(argument);
} 

export function gereicFunction<T>( argument : T):T{
  return argument;
}

export const argumentFunctionArrow = <T> (argument : T) => argument;