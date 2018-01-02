console.log('sanity check calc')

function calculator () {
    let _memory = 0;
    let _balance = 0;

 function validate (num){
       if (typeof num !== 'number') {
           throw error
       } else {
           return true
       }
    }


 function load (num) {
       validate(num);
       _total = num;
       return _total;
   }



 function getTotal (){
       return _total
   }


 
 function add (num){
      validate(num);
      _total+=num
   }

 function subtract (num){
     validate (num);
     _total -= num
 }


 function multiply (num){
     validate (num);
     _total *= num
 }

 function divide (num){
     validate (num);
     _total /= num
 }


 function recallMemory () {
     return _memory
 }




  function addMemory(){
     return _memory += _total
    
  };

  function subtractMemory(){
      return _memory -= _total
  };


 
  function clearMemory (){
      _memory = 0
  }



 return {
     load: load,
     getTotal: getTotal,
     add: add,
     subtract: subtract,
     multiply: multiply,
     divide: divide,
     recallMemory: recallMemory,
     addMemory: addMemory,
     subtractMemory: subtractMemory,
     clearMemory: clearMemory
 }
}
