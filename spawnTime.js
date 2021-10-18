async function spawnTime(time) {
    return new Promise((resolve, reject) => {
   setTimeout(() => {
       resolve(time +'s');
   }, 1000)
    
   });
}

(async () => {

  console.log('Start');
    
    const ats1 = await spawnTime(1);
    console.log(ats1);

    const ats2 = await spawnTime(2);
    console.log(ats2);

    const ats3 = await spawnTime(3);
    console.log(ats3);


    console.log('Done');
  
})();