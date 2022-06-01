// inventory (change to zero to see example of failure)
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// promise of ordering sunglasses from beach store 
const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
        resolve('Sunglasses order processed.'); 
    } else {
          reject('That item is sold out.');
      }
    }
    // promise constructor 
    const orderSunglasses = () => {
        return new Promise(myExecutor);
    };
    // returned value from orderSunglasses 
    const orderPromise = orderSunglasses();
    
    // use node app.js to test code
    console.log(orderPromise)