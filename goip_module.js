//Modulo desarrollado por: Kevin Arangu

require("isomorphic-fetch")
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

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
    //const smsKey = randomString();
    const tlf = num.replace(/ /g, "");
    const smsKey="5fd36a4a";
    const smsContent = msg.replace(/ /g, "+");
    const parameters = `line2=${line}&smskey=${smsKey}&action=SMS&telnum=${tlf}&smscontent=${smsContent}&send=Send`;
    return parameters;
}


const getByHttp = (parameters, urls, addrandomnumber=1) => {
    const request = new XMLHttpRequest();
    if (addrandomnumber==1) {
        var parameters=parameters+"&ajaxcachebust="+new Date().getTime()
    }
    if (request){
        request.onreadystatechange = () => {
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
        request.open('GET', url+"?"+parameters, true)
        request.send(null)
    }
    return request
}

const postByHttp = (num, msg, line=1) => {
    const request = new XMLHttpRequest();
    const parameters = generateParameters(num, msg, line=1);
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


// IN PROCESS, NOT USE
const sendByFetch = async () => {
    const header = new Headers();
    header.append("Content-type", "application/x-www-form-urlencoded");

    const request = await fetch()
}

module.exports = {
    getByHttp, postByHttp, generateParameters,

}

