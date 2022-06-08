const newArray =[];

function writeCards(array, event){
  
  for(let i = 0; i <array.length; i++){
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
  }
  
  return newArray;
}