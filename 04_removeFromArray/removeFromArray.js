const removeFromArray = function(...args) {
   let array=args[0]
   let newArray=[]
  function remover(item){
      if(!args.includes(item)){
        
        newArray.push(item)
      }

  }

   array.forEach(remover)
   return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
