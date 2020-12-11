const goip = require("./goip_module")

const main = async () => {
    const request = await goip.postByHttp("04149513409", "esto es un sms");
    console.log(request);
}; main();

// const rand = goip.getRandom();
// console.log(rand);

// const rand2 = goip.randomString();
// console.log(rand2);

// const sms = goip.generateParameters("04149513409", "Hola esto es un sms");
// console.log(sms);
