//Modulo desarrollado por: Kevin Arangu

require("isomorphic-fetch")
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

const urlsms = 'http://192.168.0.15/default/en_US/sms_info.html';
const urllogin = "http://192.168.0.15/default/en_US/status.html";
const username = 'xxxxx';
const password = 'xxxxx';

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
const getLogin =  (urls) => {
    const request = new XMLHttpRequest()
    request.open('GET', urls, false)
    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            if(request.status == 200){
                console.log(request.responseText);
            }
            if(request.status == 401){
                console.log("Please Authenticate");
            }
            else{
                console.log("Error loading page");
            }
        }
    };
    request.send(null)
    return request
}
const logIn =  (urls, user, pass) => {
    const request = new XMLHttpRequest()
    request.open('GET', urls, false, user, pass)
    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            if(request.status == 200){
                console.log(request.responseText);
            }
            if(request.status == 401){
                console.log("Please Authenticate");
            }
            else{
                console.log("Error loading page");
            }
        }
    };
    request.send(null)
    return request
}
const getByHttp = (urls, parameters, addrandomnumber=1) => {
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
            request.open('GET', urls+"?"+parameters, true)
            request.send(null)
    }
    return request
}
const postByHttp = (parameters, user, pass) => {
    const request = new XMLHttpRequest();
    if(request){
        request.open("POST", urlsms, false, user, pass);
        request.onreadystatechange = () => {
            if (request.readyState == 4) {
                if(request.status == 200) {
                    console.log(request.status);
                }
                else {
                    console.log("Error loading page\n");
                    console.log(request);
                };
            };
        };
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //request.setRequestHeader("Authorization", "Basic YWRtaW46YWRtaW4="); //Authorization: Basic YWRtaW46YWRtaW4=
        request.send(parameters);
    };
    return request;
}


module.exports = {
    getByHttp, postByHttp, generateParameters, getLogin, logIn,

}

