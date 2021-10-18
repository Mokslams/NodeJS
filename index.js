async function taksistas(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(time * 5);
      //else {
      //   reject(new Error('vejas nupute pinigus'))
      // }
    }, time * 1000)

  });
}

(async () => {

  console.log('Start');

  try {

    let account = 0;

    account += await taksistas(2)
    console.log(account);

    account += await taksistas(3)
    console.log(account);

    account += await taksistas(1)
    console.log(account);


    account += await taksistas(1)
    console.log(account);


    account += await taksistas(4)
    console.log(account);


  } catch (error) {
    console.log(error);
  }

  console.log('done');

})();