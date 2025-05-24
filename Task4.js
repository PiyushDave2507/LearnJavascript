function createTimer(seconds) {
    const result = [];
    
        for (let i = 1; i < seconds; i++) {
            setTimeout(() => {
            console.log(`time ${i} second`);
            result.push(i);
          if (i == seconds-1){
            console.log(`result is [${result.join(",")}]`);
            
          }  
    }, i*1000);
    
}
  // return result;
}

createTimer(5)