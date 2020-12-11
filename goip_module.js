//Modulo de sarrollado por: Kevin Arangu

require("isomorphic-fetch")
require("xmlhttprequest").XMLHttpRequest

const url = 'http://192.168.0.15/default/en_US/sms_info.html';
const username = 'xxxxx';
const password = 'xxxxx';
const asyncr = true;
const syncr = false;
const post = {
    method: 'POST',
    body: {},
    headers: {
        'Content-Type':'application/x-www-form-urlencoded',
    }
};

const getRandom = (min=100000, max=999999) => {
    return parseInt(Math.random() * (max - min) + min);
}
const randomString = (length=8) => {
    return Math.random().toString(20).substr(2, length);
}
const generateParameters = (num, msg, line=1) => {
    const smsKey = randomString();
    const smsContent = msg.replace(/ /g, "+");
    const parameter = `line2=${line}&smskey=${smsKey}&action=SMS&telnum=${num}&smscontent=${smsContent}&send=Send`;
    return parameter;
}

const postByHttp = (num, msg, line=1) => {
    const request = new XMLHttpRequest();
    const parameters = generateParameters(num, msg, line);
    request.open("POST", url, asyncr);
    request.onreadystatechange = function (aEvt) {
        if (request.readyState == 4) {
            if(request.status == 200){
                console.log(request.responseText);
            }
            else{
                console.log("Error loading page\n");
                console.log(request);
            }
        }
    };
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.setRequestHeader("Authorization", "Basic YWRtaW46YWRtaW4="); //Authorization: Basic YWRtaW46YWRtaW4=
    request.send(parameters);
    return request;
}



const sendByFetch = async () => {
    const header = new Headers();
    header.append("Content-type", "application/x-www-form-urlencoded");

    const request = await fetch()
}

module.exports = {
    postByHttp

}

