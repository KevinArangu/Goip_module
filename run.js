const goip = require("./goip_module")

const main = async () => {

    const logear = () => {
        const user = goip.logIn("http://192.168.0.15/default/en_US/status.html", "admin", "admin");
        console.log(user);
    }
    const parameters = goip.generateParameters("04149513409", "prueba de texto");
    const request = goip.getLogin("http://192.168.0.15/default/en_US/status.html");
    (request.status===401)?logear():null;



}; main();

// const rand = goip.getRandom();
// console.log(rand);

// const rand2 = goip.randomString();
// console.log(rand2);

// const sms = goip.generateParameters("04149513409", "Hola esto es un sms");
// console.log(sms);
