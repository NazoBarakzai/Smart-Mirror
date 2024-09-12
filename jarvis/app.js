//elements  last video seen 41:35

const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const speakButton = document.querySelector("#speak");
const time = document.querySelector("#time")
const battery = document.querySelector("#battery")
const internet = document.querySelector("#internet")
const msgs = document.querySelector(".messages")
let stopingR = false
weatherStatement = ""
// create a new chat


document.querySelector("#start_jarvis").addEventListener("click", () => {
    recognation.start()
})
//jarvis commands


let jarvisComs = [];
jarvisComs.push("hi friday");
jarvisComs.push("what are your commands");
jarvisComs.push("close this - to close opened popups");
jarvisComs.push("change my information - information regarding your acoounts and you");
jarvisComs.push("whats the weather or temperature");
jarvisComs.push("show the full weather report");
jarvisComs.push("are you there - to check fridays presence");
jarvisComs.push("shut down - stop voice recognition");
jarvisComs.push("open google");
jarvisComs.push('search for "your keywords" - to search on google ');
jarvisComs.push("open whatsapp");
jarvisComs.push("open youtube");
jarvisComs.push('play "your keywords" - to search on youtube ');
jarvisComs.push("close this youtube tab - to close opened youtube tab");
jarvisComs.push("open firebase");
jarvisComs.push("open netlify");
jarvisComs.push("open twitter");
jarvisComs.push("open my twitter profile");
jarvisComs.push("open instagram");
jarvisComs.push("open my instagram profile");
jarvisComs.push("open github");
jarvisComs.push("open my github profile");





//weather setup


function weather(location) {
    const weatherCont = document.querySelector(".temp").querySelectorAll("*");
    // let loc = location
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6d03c7397ca9854d1af0aec69257bddc`;
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url, true)
    xhr.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            weatherCont[0].textContent = `location : ${data.name}`;
            weatherCont[1].textContent = `country : ${data.sys.country}`;
            weatherCont[2].textContent = `Weather type : ${data.weather[0].main}`;
            weatherCont[3].textContent = `Weather description : ${data.weather[0].description}`;
            weatherCont[4].src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            weatherCont[5].textContent = `Original Temperature : ${ktc(data.main.temp)}`;
            weatherCont[6].textContent = `But it feels like ${ktc(data.main.feels_like)}`;
            weatherCont[7].textContent = `Min temperature ${ktc(data.main.temp_min)}`;
            weatherCont[8].textContent = `Max temperature ${ktc(data.main.temp_max)}`;
            weatherStatement = `sir the weather in ${data.name} is ${data.weather[0].description
                } and the temperature feel like${ktc(data.main.feels_like)}`;
        } else {
            weatherCont[0].textContent = "Weather Info Not Found";
        }
    }
    xhr.send();
}
// getData();

function ktc(k) {
    k = (k - 273.15)
    return k.toFixed(2)
}
//jarvis commands adding

window.onload = () => {
    jarvisComs.forEach((e) => {
        document.querySelector(".commands").innerHTML += `<p>#${e}</p><br/>`;
    });













}




//time setup

function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
    //autojarvis

    if (hh == 0) {
        hh = 12;
    }
    if (hh >= 12) {
        hh = hh % 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + session;

    document.getElementById("time").innerText = time;
    let t = setTimeout(function () { currentTime() }, 1000);



   





// calendar

const lang = navigator.language;

let datex = new Date();
let dayNumber 	= date.getDate();
let monthx 		= date.getMonth();

let dayName 	= date.toLocaleString(lang, {weekday: 'long'});
let monthName 	= date.toLocaleString(lang, {month: 'long'});
let year 		= date.getFullYear();

document.querySelector("#month").innerHTML = monthName
document.querySelector("#day").innerHTML = dayName
document.querySelector("#date").innerHTML = dayNumber
document.querySelector("#year").innerHTML = year





















}

currentTime();



//battery setup





let batteryPromise = navigator.getBattery()
batteryPromise.then(batteryCallback)
function batteryCallback(batteryObject) {
    printBatteryStatus(batteryObject)
    setInterval(() => {
        printBatteryStatus(batteryObject)
        //for internet refresh
        navigator.onLine ? (internet.textContent = "online") : (internet.textContent = "offline")

    }, 5000);
}


function batteryCallback(batteryObject) {
    printBatteryStatus(batteryObject);
    setInterval(() => {
        printBatteryStatus(batteryObject);
    }, 5000);
}
function printBatteryStatus(batteryObject) {
    document.querySelector("#battery").textContent = `${(batteryObject.level * 100).toFixed(2)
        }%`;
    charge = batteryObject.level * 100
    if (batteryObject.charging === true) {
        document.querySelector(".battery").style.width = "200px";
        document.querySelector("#battery").textContent = `${(batteryObject.level * 100).toFixed(2)
            }% Charging`;
        chargeStatus = "plugged in"
    }
}





























//internetsetup

navigator.onLine ? (internet.textContent = "online") : (internet.textContent = "offline")

//create a new chat

function createMsg(who, msg) {
    let newmsg = document.createElement("p")
    newmsg.innerText = msg;
    newmsg.setAttribute("class", who)
    msgs.appendChild(newmsg)

}

//jarvis setup

if (localStorage.getItem("jarvis_setup") !== null) {
    weather(JSON.parse(localStorage.getItem("jarvis_setup")).location)
}

//jarvis information setp

const setup = document.querySelector(".jarvis_setup")
setup.style.display = "none"
if (localStorage.getItem("jarvis_step") === null) {
    // setup.style.display = "flex"
    setup.style.display = "block"
    setup.querySelector("button").addEventListener("click", userInfo)

}
//user info
function userInfo() {
    let setupInfo = {
        name: setup.querySelectorAll("input")[0].value,
        bio: setup.querySelectorAll("input")[1].value,
        location: setup.querySelectorAll("input")[2].value,
        instagram: setup.querySelectorAll("input")[3].value,
        github: setup.querySelectorAll("input")[4].value,
        twitter: setup.querySelectorAll("input")[5].value,
        facebook: setup.querySelectorAll("input")[6].value
    }
    let testArr = []
    setup.querySelectorAll("input").forEach((e) => {
        testArr.push(e.value)
    })
    if (testArr.includes("")) {
        readOut("sir Enter your command complete")
    } else {
        localStorage.clear()
        localStorage.setItem("jarvis_setup", JSON.stringify(setupInfo))
        setup.style.display = "none"
        weather(JSON.parse(localStorage.getItem("jarvis_setup")).location)
    }
}


//speech recognation code

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognation = new SpeechRecognition();
recognation.continuous = true
//speech recognation start
recognation.onstart = function () {
    console.log("vr active");
};


//closing open tab
let windowsB = []



//speech recognation result

recognation.onresult = function (event) {
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    transcript = transcript.toLowerCase();
    let userdata = localStorage.getItem("jarvis_setup")
    createMsg("usermsg", transcript)


    if (transcript.includes("jarvis")) {
        readOut("hello sir");
    }

    if (transcript.includes("what are your commands")) {
        readOut("sir, i follow the these commands"+jarvisComs);
        document.querySelector(".commands").style.display = "block"
    }

    if (transcript.includes("close this")) {
        readOut("closing");
        document.querySelector(".commands").style.display = "none"
        setup.style.display = "none"
    }

    if (transcript.includes("close all tabs")) {
        readOut("clossing all tabs");
        windowsB.forEach((e) => {
            e.close()
        })
    }

    if (transcript.includes("open youtube")) {
        readOut("opening youtube sir");
        let a = window.open("https://www.youtube.com/");
        windowsB.push(a)
    }
    if (transcript.includes("open google")) {
        readOut("opening google sir");
        let a = window.open("https://www.google.com/");
        windowsB.push(a)
    }
    //google search

    if (transcript.includes("search for")) {
        readOut("here's the result");
        let input = transcript.split("");
        input.splice(0, 11);
        input.pop();
        input = input.join("").split(" ").join("+");
        console.log(input);
        let a = window.open('https://www.google.com/search?q=' + input);
        windowsB.push(a)
    }

    if (transcript.includes("youtube for")) {
        readOut("here's the result");
        let input = transcript.split("");
        input.splice(0, 11);
        // input.pop();
        input = input.join("").split(" ").join("+");
        console.log(input);
        let a = window.open('https://www.youtube.com/watch?q=' + input);
        windowsB.push(a)
    }



    //
    if (transcript.includes("open firebase") || transcript.includes("open fire base")) {
        readOut("opening firebase sir");
        let a = window.open("https://www.firebase.com/");
        windowsB.push(a)
    }
    if (transcript.includes("open my firebase profile") || transcript.includes("open fire base")) {
        readOut("opening firebase ng sir");
        let a = window.open("https://console.firebase.google.com/?utm_source=firebase.google.com&utm_medium=referral&pli=1");

        windowsB.push(a)
    }
    //github commands
    if (transcript.includes("open github")) {
        readOut("opening github sir");
        let a = window.open("https://github.com/")
        windowsB.push(a)
    }



    if (transcript.includes("open my github profile")) {
        readOut("opening your github profile");
        let a = window.open(`https://github.com/${JSON.parse(userdata).github}`);
        windowsB.push(a)
    }



    if (transcript.includes("open instagram")) {
        readOut("opening instagram sir");
        let a = window.open("https://www.instagram.com/accounts/login/");
        windowsB.push(a)
    }

    if (transcript.includes("open my instagram profile")) {
        readOut("opening your instagram profile");
        let a = window.open(`https://www.instagram.com/${JSON.parse(userdata).instagram}`);
        windowsB.push(a)
    }


    if (transcript.includes("open twitter")) {
        readOut("opening twitter sir");
        let a = window.open("https://twitter.com/i/flow/login");
        windowsB.push(a)
    }

    if (transcript.includes("open my twitter profile")) {
        readOut("opening your twitter profile");
        let a = window.open(`https://twitter.com/i/flow/loginm/${JSON.parse(userdata).twitter}`);
        windowsB.push(a)
    }


    if (transcript.includes("open facebook")) {
        readOut("opening facebook sir");
        let a = window.open("https://www.facebook.com/");
        windowsB.push(a)
    }

    if (transcript.includes("open my facebook profile")) {
        readOut("opening facebook sir");
        let a = window.open(`https://www.facebook.com/${JSON.parse(userdata).facebook}`);
        windowsB.push(a)
    }


    if (transcript.includes("open whatsapp")) {
        readOut("opening whatsapp sir");
        let a = window.open("https://web.whatsapp.com/");
        windowsB.push(a)
    }


    if (transcript.includes("shutdown")) {
        readOut("Ok sir good by")
        stopingR = true;
        recognation.stop();
    }
    if (transcript.includes("are you there")) {
        readOut("yes sir")
    }

    if (transcript.includes("what is temperature")) {
        readOut(weatherStatement);
    }

    if (transcript.includes("complete weather report")) {
        readOut("opening the weather report sir");
        let a = window.open(`https://www.google.com/search?q=weather+in+${JSON.parse(localStorage.getItem("jarvis_setup")).location
            }`
        );
        windowsB.push(a)
    }



    if (transcript.includes("open my gmail")) {
        readOut("opening gmail sir");
        let a = window.open("https://mail.google.com/");
        windowsB.push(a)
    }



    if (transcript.includes("clear my bio")) {
        readOut("cleard");
        localStorage.clear();
    }



    if(transcript.includes("open events")){
        readOut("opening upcoming events")
        let a = window.open("http://127.0.0.1:5500/annocment.html");
        windowsB.push(a)
    }

    //news commands
    if(transcript.includes("tell me news")){
        readOut("these are todays top headlines")
        getNews()
    }


    

}







recognation.onend = function () {
    if (stopingR === false) {
        setTimeout(() => {
            recognation.start();
        }, 500);
    } else if (stopingR === true) {
        recognation.stop();
    }
};


//speech recognation end
recognation.onend = function () {
    console.log("vr deactive");
};
//speech recognation continous

// recognation.continuons = true;

startButton.addEventListener("click", () => {
    recognation.start();
});

stopButton.addEventListener("click", () => {
    recognation.stop();
});

//krillin speech

function readOut(messages) {
    const speech = new SpeechSynthesisUtterance();
    //different voices
    const allVoices = speechSynthesis.getVoices();
    speech.text = messages;
    speech.voice = allVoices[2];
    speech.volume = 9;
    window.speechSynthesis.speak(speech);
    console.log("speaking out");
    createMsg("jmsg", messages)
}

//example

speakButton.addEventListener("click", () => {
    readOut("hi, lovely");
});

window.onload = function () {
    readOut("   ");
};





document.querySelector(".calendar").addEventListener("click", () => {
    window.open("http://127.0.0.1:5500/annocment.html")
  });



// news setup
async function getNews(){
    var url = "https://newsdata.io/api/1/news?apikey=pub_142346380caae48264b55e532ca24d15ddc7b&country=pk&language=en"
    var req = new Request(url)
    await fetch(req).then((Response) => Response.json())
    .then((data)=>{
        console.log(data);
        let arrNews = data.results;
        arrNews.length = 5;
        let a = []
        arrNews.forEach((e,index)=>{
            a.push(index+1)
            a.push(".....")
            a.push(e.title)
            a.push("......")
        })
        readOut(a)

    })
    
}




