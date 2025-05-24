function createTimer(seconds) {
    const result = [];
    
        for (let i = 1; i < seconds; i++) {
            setTimeout(() => {
            console.log(`time ${i} second`);
            result.push(i);
            setTimeout(()=>{
             if (i == seconds-1){
             console.log(`result is [${result.join(",")}]`);
             }
          },1000)  
    }, i*1000);
    
}

}

createTimer(5)