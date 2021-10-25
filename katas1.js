function oneThroughTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result*/

    let result = [] 
    
    for (let number = 1; number <= 20; number++) {

        result.push(number)

    }
    
    return result
    
}
console.log(oneThroughTwenty())
//call function oneThroughTwenty




function evensToTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result */
   let result = [] 
    
   for (let number = 1; number <= 20; number++) {

       if (number % 2 == 0) { 

       result.push(number)

       }

   }
   
   return result

  }
console.log(evensToTwenty())
//call function evensToTwenty




function oddsToTwenty() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let result = [] 
    
  for (let number = 1; number <= 20; number++) {

      if (number % 2 !== 0) { 

      result.push(number)

      }
  }
  
  return result

}
console.log(oddsToTwenty())
//call function oddsToTwenty




function multiplesOfFive() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let result = [] 
    
  for (let number = 5; number <= 100; number++) {

      if (number % 5 == 0) { 

      result.push(number)

      }
 
  }
  
  return result

}
console.log(multiplesOfFive())
//call function multiplesOfFive




function squareNumbers() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let result = []

  for (let counter = 1; counter <= 100; counter++){
   
      if(counter**.5 % 1 == 0){  

      result.push(counter) 
      
      }  
  
  }

  return result

}
console.log(squareNumbers())
//call function squareNumbers




function countingBackwards() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let result = [] 
    
    for (let number = 20; number >= 1; number--) {

        result.push(number)

    }
    
    return result

}

console.log(countingBackwards())
//call function countingBackwards




function evenNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let result = [] 
    
    for (let number = 20; number >= 1; number--) {

        if(number % 2 == 0){

        result.push(number)

        }

    }
    
    return result

}

console.log(evenNumbersBackwards())
//call function evenNumbersBackwards




function oddNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let result = [] 
    
    for (let number = 20; number >= 1; number--) {

        if(number % 2 !== 0){

        result.push(number)

        }

    }
    
    return result

}
console.log(oddNumbersBackwards() )
//call function oddNumbersBackwards





function multiplesOfFiveBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let result = [] 
    
    for (let number = 100; number >= 5; number--) {

        if(number % 5 == 0){

        result.push(number)

        }

    }
    
    return result

}
console.log(multiplesOfFiveBackwards())
//call function multiplesOfFiveBackwards




function squareNumbersBackwards() {
    
   /* Your code goes below
  Write a for or a while loop
  return the result */

  let result = []

  for (let counter = 100; counter >= 1; counter--){
   
      if(counter**.5 % 1 == 0){  

      result.push(counter) 
      
      }  

  }

  return result;

}
console.log(squareNumbersBackwards())
//call function squareNumbersBackwards



