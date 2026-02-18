function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
setTimeout(() => {
    document.getElementById("createdByMatas").style.opacity = "1";
}, 100);
setTimeout(() => {
    if(document.getElementById("raide14").style.opacity != "0"){
        document.getElementById("badConnectionBg").style.bottom = "25px";
        document.getElementById("badConnectionI").style.animation = "connectionBlink 3s infinite";
    }
}, 10000);
let sounds = document.getElementById("soundsInput");
function adjustPinnedBottom() {
    if(sounds == 0){
        let bodyRect = document.body.getBoundingClientRect(),
        elemRect = document.getElementById("pinnedBottom").getBoundingClientRect(),
        kaire = elemRect.left - bodyRect.left;
        document.getElementById("pinnedBottom").style.bottom = kaire + "px";
        document.getElementById("body").style.paddingBottom = (kaire + 75) + "px";
    }
    else{
        let bodyRect = document.body.getBoundingClientRect(),
        elemRect = document.getElementById("pinnedBottom").getBoundingClientRect(),
        kaire = elemRect.left - bodyRect.left;
        document.getElementById("pinnedBottom").style.bottom = kaire + "px";
        document.getElementById("body").style.paddingBottom = (kaire + 90) + "px";
    }
}
setInterval(()=>{
    adjustPinnedBottom()
}, 100);
// window.onresize = adjustPinnedBottom();

window.onload = ()=>{
    function ajax(){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        xhr.onload = ()=>{
            if(xhr.status == 200 && xhr.status < 300){
                online();
            }
            else{
                offline();
            }
        }
        xhr.onerror = ()=>{
            offline();
        }
        xhr.send();
    }

    function online(){
        document.getElementById("noConnectionBg").style.bottom = "-50%";
        document.getElementById("noConnectionI").style.animation = "none";
    }
    function offline(){
        setTimeout(() => {
            document.getElementById("noConnectionBg").style.bottom = "25px";
            document.getElementById("noConnectionI").style.animation = "connectionBlink 3s infinite";
        }, 200);
    }

    setInterval(()=>{
        ajax();
    }, 100);

    function loaded(){
        document.getElementById("pinnedBackgroundDaugiau").style.display = "block";
        setTimeout(() => {
            document.getElementById("raide14").style.opacity = "0";
            document.getElementById("badConnectionBg").style.bottom = "-50%";
            document.getElementById("badConnectionI").style.animation = "none";
            document.getElementById("rodomaDaugiau").style.bottom = "15px";
            document.getElementById("pinnedBackgroundDaugiau").style.opacity = "1";
            document.getElementById("pinnedBackgroundDaugiau").style.pointerEvents = "all";
        }, 300);
        setTimeout(() => {
            document.getElementById("raide13").style.opacity = "0";
            document.getElementById("badConnectionBg").style.bottom = "-50%";
            document.getElementById("badConnectionI").style.animation = "none";
        }, 400);
        setTimeout(() => {
            document.getElementById("raide12").style.opacity = "0";
        }, 500);
        setTimeout(() => {
            document.getElementById("raide11").style.opacity = "0";
        }, 600);
        setTimeout(() => {
            document.getElementById("raide10").style.opacity = "0";
        }, 700);
        setTimeout(() => {
            document.getElementById("raide9").style.opacity = "0";
        }, 800);
        setTimeout(() => {
            document.getElementById("raide8").style.opacity = "0";
        }, 900);
        setTimeout(() => {
            document.getElementById("raide7").style.opacity = "0";
        }, 1000);
        setTimeout(() => {
            document.getElementById("raide6").style.opacity = "0";
        }, 1100);
        setTimeout(() => {
            document.getElementById("raide5").style.opacity = "0";
        }, 1200);
        setTimeout(() => {
            document.getElementById("raide4").style.opacity = "0";
        }, 1300);
        setTimeout(() => {
            document.getElementById("raide3").style.opacity = "0";
            document.getElementById("rodomaDaugiau").style.bottom = "-100%";
            document.getElementById("pinnedBackgroundDaugiau").style.opacity = "0";
            document.getElementById("pinnedBackgroundDaugiau").style.pointerEvents = "none";
        }, 1400);
        setTimeout(() => {
            document.getElementById("raide2").style.opacity = "0";
        }, 1500);
        setTimeout(() => {
            document.getElementById("raide1").style.opacity = "0";
            document.getElementById("loading").style.transition = "0.3s";
        }, 1600);
        setTimeout(() => {
            document.getElementById("loading").style.opacity = "0";
            document.getElementById("createdByMatas").style.display = "none";
            document.querySelector(".langas").style.opacity = "1";
            document.getElementById("pinnedBackgroundDaugiau").style.display = "none";
        }, 1700);
        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
        }, 2000);
    }
    
    loaded();
    document.getElementById("sheetsIframe").src = atob('aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZmlsZS9kLzExWk8ycUZNS2RUUE16S3lGaS15di0yNDRmM1hPZWRnTUVMeG9WLVN1VkFBL3ByZXZpZXc=');
    document.getElementById("docsIframe").src = atob('aHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZmlsZS9kLzF4RnRwcjBvY0NXNTI1TDNqVGdNZzRoc3ZXU05RUkttaC9wcmV2aWV3');
    document.getElementById("theme").innerHTML = atob('VFYgbGFpZG9z');
    document.getElementById("download_script").href = atob('aHR0cHM6Ly9jcmVhdGVkYnltYXRhcy5naXRodWIuaW8vYWNjZXNzL2ZpbGVzL3NpbXRhZGllbmlvLXNjZW5hcmlqdXMucGRm');

    document.getElementById("adrianaCerepokaiteRole").innerHTML = atob('RG92YW4=') + 'ė' + atob('bGk=') + 'ų' + atob('IGRhbGludG9qYQ==');
    document.getElementById("agotaKieraiteRole").innerHTML = atob('TGlldHV2b3MgdGFsZW50') + 'ų' + atob('IHZlZA==') + 'ė' + atob('amE=');
    document.getElementById("armandasJokubauskasRole").innerHTML = atob('TWV0') + 'ų' + atob('IGFwZG92YW5vamlt') + 'ų' + atob('IHZlZA==') + 'ė' + atob('amFz');
    document.getElementById("arnasLapenasRole").innerHTML = atob('RWtzdHJhc2Vuc2FzIDQ=');
    document.getElementById("arturVelickoRole").innerHTML = atob('S29taWthcw==');
    document.getElementById("aruneBanuskeviciuteRole").innerHTML = atob('VGVpcw==') + 'ė' + atob('amEgMQ==');
    document.getElementById("berzunaSimaityteRole").innerHTML = atob('R2FicmllbA==') + 'ė' + atob('cyBwYXJvZGlqYQ==');
    document.getElementById("domasLenartaviciusRole").innerHTML = atob('RmFyYXMgbnIuIDE=');
    document.getElementById("edvinMagazejevRole").innerHTML = atob('RmFyYXMgbnIuIDM=');
    document.getElementById("gabrieleRagoskoRole").innerHTML = atob('QXVrc2luaW8gcHJvdG8gdmVk') + 'ė' + atob('amE=');
    document.getElementById("jurgisMuntrimasRole").innerHTML = atob('RG92YW4=') + 'ė' + atob('bGk=') + 'ų' + atob('IGRhbGludG9qYXM=');
    document.getElementById("justinaCepaiteRole").innerHTML = atob('U3RhbmQgdXAnZXI=') + 'ė';
    document.getElementById("kamileVaranauskaiteRole").innerHTML = atob('RWtzdHJhc2Vucw==') + 'ų' + atob('IHZlZA==') + 'ė' + atob('amE=');
    document.getElementById("lijanaRadkeviciuteRole").innerHTML = atob('VGVpcw==') + 'ė' + atob('amEgMw==');
    document.getElementById("matasKasparaviciusRole").innerHTML = atob('QmVhdG9zIGFzaXN0ZW50YXMgJiBFa3N0cmFzZW5zYXMgMw==');
    document.getElementById("metaMelisaBukauskaiteRole").innerHTML = atob('VGVpcw==') + 'ė' + atob('amEgMg==');
    document.getElementById("metaPanavaiteRole").innerHTML = atob('RWtzdHJhc2Vucw==') + 'ė' + atob('IDI=');
    document.getElementById("neivydasPleskovasRole").innerHTML = atob('RmFyYXMgbnIuIDI=');
    document.getElementById("norbertasBorovskisRole").innerHTML = atob('QXVrc2luaW8gcHJvdG8gdmVk') + 'ė' + atob('amFz');
    document.getElementById("rugileKaniusaiteRole").innerHTML = atob('U3RhbmQgdXAnZXI=') + 'ė';
    document.getElementById("rugileTamasauskaiteRole").innerHTML = atob('RWtzdHJhc2Vucw==') + 'ė' + atob('IDE=');
    document.getElementById("samantaKurecRole").innerHTML = atob('UGF1bGlub3MgcGFyb2RpamE=');
    document.getElementById("sauleBabaliauskaiteRole").innerHTML = 'Ž' + atob('aW5p') + 'ų' + atob('IHZlZA==') + 'ė' + atob('amEgMiAmIFZpZW51b2xpa3Rvaw==') + 'ė';
    document.getElementById("simonaSmatauskaiteRole").innerHTML = 'Ž' + atob('aW5p') + 'ų' + atob('IHZlZA==') + 'ė' + atob('amEgMSAmIEJlYXRh');
    document.getElementById("smilteBazeviciuteRole").innerHTML = atob('TWV0') + 'ų' + atob('IGFwZG92YW5vamlt') + 'ų' + atob('IHZlZA==') + 'ė' + atob('amE=');
}

// išjungti right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// išjungti f12, ctrl+shift+i, ctrl+shift+j, ctrl+u (inspect tool)
function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
){
    deny();
    return false; 
}
};

function deny(){
    sound.pause();
    soundPlayPauseIcon.classList.remove("fa-pause");
    soundPlayPauseIcon.classList.add("fa-play");
    sound.currentTime = 0;
    document.getElementById("currentTrackName").innerText = 'Garso takelio pavadinimas';
    document.getElementById("soundDuration").innerText = '0:00';

    document.getElementById("accessDenied").style.display = "flex";
    document.getElementById("uzdraustaRestart").style.animation = "prixClipFix 10s linear";
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("accessDenied").style.transform = "scale(1)";
        document.getElementById("accessDenied").style.opacity = "1";
    }, 1);
    setTimeout(() => {
        document.getElementById("ban").style.opacity = "0";
    }, 100);
    setTimeout(() => {
        document.getElementById("ban").style.opacity = "1";
    }, 200);
    setTimeout(() => {
        document.getElementById("ban").style.opacity = "0";
    }, 300);
    setTimeout(() => {
        document.getElementById("ban").style.opacity = "1";
    }, 400);
    setTimeout(() => {
        document.getElementById("ban").style.opacity = "0";
    }, 500);
    setTimeout(() => {
        document.getElementById("ban").style.opacity = "1";
    }, 600);
    setTimeout(() => {
        location.replace("index.html");
    }, 10000);
}

// scroll'inimo animacijos, dark mode
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.getElementById("infoSimtadienis").style.boxShadow = "0 0 10px #464646";
            document.getElementById("infoSimtadienis").style.width = "95%";
            document.getElementById("infoSimtadienis").style.top = "15px";
            document.getElementById("infoSimtadienis").style.left = "2.5%";
            document.getElementById("infoSimtadienis").style.left = "2.5%";
            document.getElementById("infoSimtadienis").style.borderRadius = "25px";
        }
        else{
            document.getElementById("infoSimtadienis").style.boxShadow = "0 0 10px lightgrey";
            document.getElementById("infoSimtadienis").style.width = "95%";
            document.getElementById("infoSimtadienis").style.top = "15px";
            document.getElementById("infoSimtadienis").style.left = "2.5%";
            document.getElementById("infoSimtadienis").style.left = "2.5%";
            document.getElementById("infoSimtadienis").style.borderRadius = "25px";
        }
    }
    else {
        document.getElementById("infoSimtadienis").style.boxShadow = "none";
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.getElementById("infoSimtadienis").style.width = "100%";
            document.getElementById("infoSimtadienis").style.top = "0";
            document.getElementById("infoSimtadienis").style.left = "0";
            document.getElementById("infoSimtadienis").style.left = "0";
            document.getElementById("infoSimtadienis").style.borderRadius = "0";
        }
        else{
            document.getElementById("infoSimtadienis").style.width = "100%";
            document.getElementById("infoSimtadienis").style.top = "0";
            document.getElementById("infoSimtadienis").style.left = "0";
            document.getElementById("infoSimtadienis").style.left = "0";
            document.getElementById("infoSimtadienis").style.borderRadius = "0";
        }
    }
}

let passSvecias = atob('MDg1MjU4');

let passAdrianaCerepokaite = atob('NzU5ODc2');
let passAgotaKieraite = atob('NTAwNDc4');
let passArmandasJokubauskas = atob('OTU0NTE4');
let passArnasLapenas = atob('ODMwNTc0');
let passArturVelicko = atob('MTkxMzkw');
let passAruneBanuskeviciute = atob('ODI3NDgy');
let passBerzunaSimaityte = atob('NjQ1NzUx');
let passDomasLenartavicius = atob('MzI1Njc0');
let passEdvinMagazejev = atob('MTA0MDYy');
let passGabrieleRagosko = atob('MDM5NTg2');
let passJurgisMuntrimas = atob('MDU0MTYw');
let passJustinaCepaite = atob('NTM4MjA0');
let passKamileVaranauskaite = atob('ODkzMjc1');
let passLijanaRadkeviciute = atob('MDgzNzM0');
let passMatasKasparavicius = atob('NzQyMDk0');
let passMetaMelisaBukauskaite = atob('MDI4NDgy');
let passMetaPanavaite = atob('NTQ5Mjcy');
let passNeivydasPleskovas = atob('MzY2NDU5');
let passNorbertasBorovskis = atob('MTgzNzQ4');
let passRugileKaniusaite = atob('NDIxMzY5');
let passRugileTamasauskaite = atob('OTkxMDY3');
let passSamantaKurec = atob('MjgyNzM5');
let passSauleBabaliauskaite = atob('OTA2Njg1');
let passSimonaSmatauskaite = atob('NzM5MzAy');
let passSmilteBazeviciute = atob('MDEwNDcz');

function openScript() {
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("scenarijusDocs").style.bottom = "0";
        document.querySelector(".langas").style.opacity = "0";
    }, 10);
}
function closeScript() {
    document.getElementById("body").style.overflowY = "scroll";
    setTimeout(() => {
        document.getElementById("scenarijusDocs").style.bottom = "-100%";
        document.querySelector(".langas").style.opacity = "1";
    }, 10);
}

function downloadScript() {
    document.getElementById("pinnedBackground").style.display = "block";
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("atsisiunciamasScenarijusBg").style.display = "flex";
        document.getElementById("atsisiunciamasScenarijus").style.display = "flex";
        document.getElementById("downloadScriptSpinnerDiv").style.animation = "spin2 0.65s linear infinite";
    }, 1);
    setTimeout(() => {
        document.getElementById("atsisiunciamasScenarijusBg").style.opacity = "1";
    }, 2);
    setTimeout(() => {
        document.getElementById("atsisiunciamasScenarijusBg").style.width = "100%";
        document.getElementById("atsisiunciamasScenarijusBg").style.height = "100%";
        document.getElementById("atsisiunciamasScenarijusBg").style.borderRadius = "0";
        document.getElementById("atsisiunciamasScenarijusBg").style.backgroundColor = "transparent";
        document.getElementById("atsisiunciamasScenarijusBg").style.top = "0";
        document.getElementById("atsisiunciamasScenarijusBg").style.right = "0";
        document.getElementById("pinnedBackground").style.opacity = "1";
    }, 10);
    setTimeout(() => {
        document.getElementById("download_script").click();
    }, 1010);
    setTimeout(() => {
        document.getElementById("atsisiunciamasScenarijusBg").style.opacity = "0";
        document.getElementById("pinnedBackground").style.opacity = "0";
    }, 6010);
    setTimeout(() => {
        document.getElementById("atsisiunciamasScenarijusBg").style.display = "none";
        document.getElementById("atsisiunciamasScenarijusBg").style.opacity = "0";
        document.getElementById("atsisiunciamasScenarijusBg").style.width = "30px";
        document.getElementById("atsisiunciamasScenarijusBg").style.height = "30px";
        document.getElementById("atsisiunciamasScenarijusBg").style.borderRadius = "25px";
        document.getElementById("atsisiunciamasScenarijusBg").style.top = "15px";
        document.getElementById("atsisiunciamasScenarijusBg").style.right = "60px";
        document.getElementById("pinnedBackground").style.opacity = "1";
        document.getElementById("pinnedBackground").style.display = "none";
        document.getElementById("body").style.overflowY = "scroll";
    }, 6310);
}

function daugiau() {
    document.getElementById("pinnedBackgroundDaugiau").style.display = "block";
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("rodomaDaugiau").style.bottom = "15px";
        document.getElementById("pinnedBackgroundDaugiau").style.opacity = "1";
        document.getElementById("pinnedBackgroundDaugiau").style.pointerEvents = "all";
    }, 10);
}
function uzdarytiDaugiau() {
    document.getElementById("rodomaDaugiau").style.bottom = "-100%";
    document.getElementById("pinnedBackgroundDaugiau").style.opacity = "0";
    document.getElementById("pinnedBackgroundDaugiau").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("pinnedBackgroundDaugiau").style.display = "none";
        document.getElementById("body").style.overflowY = "scroll";
    }, 300);
}

function openRehearsalList() {
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("repeticijuDatos").style.bottom = "0";
        document.getElementById("repeticijuDatosNav").style.top = "0";
        document.querySelector(".langas").style.opacity = "0";
    }, 10);
}
function closeRehearsalList() {
    document.getElementById("body").style.overflowY = "scroll";
    setTimeout(() => {
        document.querySelector(".langas").style.opacity = "1";
        document.getElementById("repeticijuDatos").style.bottom = "-100%";
        document.getElementById("repeticijuDatosNav").style.top = "100%";
    }, 10);
}

function openExpenses() {
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("islaidosSheets").style.bottom = "0";
        document.querySelector(".langas").style.opacity = "0";
    }, 10);
}
function closeExpenses() {
    document.getElementById("body").style.overflowY = "scroll";
    setTimeout(() => {
        document.getElementById("islaidosSheets").style.bottom = "-100%";
        document.querySelector(".langas").style.opacity = "1";
    }, 10);
}

function reportError() {
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("klaidosPranesimas").style.bottom = "0";
        document.querySelector(".langas").style.opacity = "0";
    }, 10);
}
function cancelReportError() {
    document.getElementById("body").style.overflowY = "scroll";
    setTimeout(() => {
        document.getElementById("klaidosPranesimas").style.bottom = "-100%";
        document.querySelector(".langas").style.opacity = "1";
        document.getElementById('emptyField').style.display = "none";
        document.getElementById('pranesimas').value = '';
    }, 10);
}

function sendError(){
    if(document.getElementById('pranesimas').value == ''){
        document.getElementById('emptyField').style.display = "block";
    }
    else{
        document.getElementById('emptyField').style.display = "none";
        document.getElementById('user').value =  document.getElementById('errorName').value;
        document.getElementById('message').value =  document.getElementById('pranesimas').value;
        document.getElementById('errorSend').style.opacity =  "0";
        setTimeout(() => {
            document.getElementById('errorSend').style.display =  "none";
            document.getElementById('errorSending').style.opacity =  "1";
        }, 300);

        setTimeout(() => {
            submitFormBtn.click();
        }, 1000);
    }
}





function openSoundTracks() {
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        location.replace('https://createdbymatas.github.io/gsg/dashboard');
    }, 10);
}




let inputas = "";
function keypadPress() {
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "white";
    document.getElementById("istrynimas").style.pointerEvents = "all";
    document.getElementById("paste").style.color = "transparent";
    document.getElementById("paste").style.pointerEvents = "none";
    if(inputas.length === 1)
        {
            document.getElementById("taskelis1").style.backgroundColor = "white";
    }
    else if(inputas.length === 2)
        {
            document.getElementById("taskelis2").style.backgroundColor = "white";
    }
    else if(inputas.length === 3)
        {
            document.getElementById("taskelis3").style.backgroundColor = "white";
    }
    else if(inputas.length === 4)
        {
            document.getElementById("taskelis4").style.backgroundColor = "white";
    }
    else if(inputas.length === 5)
        {
            document.getElementById("taskelis5").style.backgroundColor = "white";
    }
    else if(inputas.length === 6)
        {
            document.getElementById("taskelis6").style.backgroundColor = "white";
            document.getElementById("gerai").click();
    }
}
function pirmas() {
    inputas = inputas + 1;
    keypadPress();
}
function antras() {
    inputas = inputas + 2;
    keypadPress();
}
function trecias() {
    inputas = inputas + 3;
    keypadPress();
}
function ketvirtas() {
    inputas = inputas + 4;
    keypadPress();
}
function penktas() {
    inputas = inputas + 5;
    keypadPress();
}
function sestas() {
    inputas = inputas + 6;
    keypadPress();
}
function septintas() {
    inputas = inputas + 7;
    keypadPress();
}
function astuntas() {
    inputas = inputas + 8;
    keypadPress();
}
function devintas() {
    inputas = inputas + 9;
    keypadPress();
}
function nulinis() {
    inputas = inputas + 0;
    keypadPress();
}
function iklijuotiKoda() {
    document.getElementById("pasteBg").style.display = "flex";
    document.getElementById("pinnedBackgroundPaste").style.display = "block";
    setTimeout(() => {
        document.getElementById("pasteBg").style.opacity = "1";
        document.getElementById("pasteCode").style.transform = "scale(1)";
        document.getElementById("pinnedBackgroundPaste").style.opacity = "1";
    }, 10);
}
function atsauktiIklijavima() {
    document.getElementById("pasteBg").style.opacity = "0";
    document.getElementById("pinnedBackgroundPaste").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("pasteBg").style.display = "none";
        document.getElementById("pasteCode").style.transform = "scale(1.2)";
        document.getElementById("pinnedBackgroundPaste").style.display = "none";
    }, 300);
}
const pasteButton = document.getElementById("pasteBtn");
function patvirtintiIklijavima() {   
    const pasteButton = document.querySelector('#pasteBtn');
    pasteButton.addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText()
        document.querySelector('#kodas').value = text;
        console.log('Kodas buvo įklijuotas sėkmingai.');
        document.getElementById("pasteBg").style.opacity = "0";
        document.getElementById("pinnedBackgroundPaste").style.opacity = "0";
        document.getElementById("paste").style.color = "white";
        document.getElementById("paste").style.pointerEvents = "all";
        document.getElementById("taskelis1").style.backgroundColor = "white";
        document.getElementById("taskelis2").style.backgroundColor = "white";
        document.getElementById("taskelis3").style.backgroundColor = "white";
        document.getElementById("taskelis4").style.backgroundColor = "white";
        document.getElementById("taskelis5").style.backgroundColor = "white";
        document.getElementById("taskelis6").style.backgroundColor = "white";
        document.getElementById("gerai").click();
        setTimeout(() => {
            document.getElementById("pasteBg").style.display = "none";
            document.getElementById("pasteCode").style.transform = "scale(1.2)";
            document.getElementById("pinnedBackgroundPaste").style.display = "none";
        }, 300);
    } catch (error) {
        console.log('Nepavyko nuskaityti iškarpinės.');
        document.getElementById("failedToPasteBg").style.bottom = "25px";
        setTimeout(() => {
            document.getElementById("failedToPasteBg").style.bottom = "-50%";
        }, 3000);
    }
    });
        
    
}
function istrinti() {
    inputas = "";
    document.getElementById("kodas").value = '';
    document.getElementById("istrynimas").style.color = "transparent";
    document.getElementById("istrynimas").style.pointerEvents = "none";
    document.getElementById("paste").style.color = "white";
    document.getElementById("paste").style.pointerEvents = "all";
    document.getElementById("taskelis1").style.backgroundColor = "transparent";
    document.getElementById("taskelis2").style.backgroundColor = "transparent";
    document.getElementById("taskelis3").style.backgroundColor = "transparent";
    document.getElementById("taskelis4").style.backgroundColor = "transparent";
    document.getElementById("taskelis5").style.backgroundColor = "transparent";
    document.getElementById("taskelis6").style.backgroundColor = "transparent";
}
function checkOnCommand() {
    document.getElementById("loading").style.display = "flex";
    document.getElementById("ivestiKoda").style.opacity = "0.3";
    document.getElementById("keypad").style.opacity = "0.3";
    document.getElementById("istrynimas").style.color = "transparent";
    document.getElementById("istrynimas").style.pointerEvents = "none";
}
function checkOffCommand(){
    inputas = ""
    document.getElementById("kodas").value = '';
    document.getElementById("taskelis1").style.backgroundColor = "transparent";
    document.getElementById("taskelis2").style.backgroundColor = "transparent";
    document.getElementById("taskelis3").style.backgroundColor = "transparent";
    document.getElementById("taskelis4").style.backgroundColor = "transparent";
    document.getElementById("taskelis5").style.backgroundColor = "transparent";
    document.getElementById("taskelis6").style.backgroundColor = "transparent";
    document.getElementById("paste").style.color = "white";
    document.getElementById("paste").style.pointerEvents = "all";
}
function check(form)
{
    if(form.pin.value.includes(passSvecias) == true) {
        document.cookie = "svecias=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("svecias").style.display = "block";
            document.getElementById("errorName").value = 'Svečias';
        }, 3600);
        setTimeout(() => {
            document.getElementById("svecias").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passAdrianaCerepokaite) == true) {
        document.cookie = "adrianaCerepokaite=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("adrianaCerepokaite").style.display = "block";
            document.getElementById("errorName").value = 'Adriana Čerepokaitė';
        }, 3600);
        setTimeout(() => {
            document.getElementById("adrianaCerepokaite").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passAgotaKieraite) == true) {
        document.cookie = "agotaKieraite=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("agotaKieraite").style.display = "block";
            document.getElementById("errorName").value = 'Agota Kieraitė';
        }, 3600);
        setTimeout(() => {
            document.getElementById("agotaKieraite").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passArmandasJokubauskas) == true) {
        document.cookie = "armandasJokubauskas=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("armandasJokubauskas").style.display = "block";
            document.getElementById("errorName").value = 'Armandas Jokubauskas';
        }, 3600);
        setTimeout(() => {
            document.getElementById("armandasJokubauskas").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passArnasLapenas) == true) {
        document.cookie = "arnasLapenas=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("arnasLapenas").style.display = "block";
            document.getElementById("errorName").value = 'Arnas Lapėnas';
        }, 3600);
        setTimeout(() => {
            document.getElementById("arnasLapenas").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passArturVelicko) == true) {
        document.cookie = "arturVelicko=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("arturVelicko").style.display = "block";
            document.getElementById("errorName").value = 'Artur Veličko';
        }, 3600);
        setTimeout(() => {
            document.getElementById("arturVelicko").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passAruneBanuskeviciute) == true) {
        document.cookie = "aruneBanuskeviciute=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("aruneBanuskeviciute").style.display = "block";
            document.getElementById("errorName").value = 'Arūnė Banuškevičiūtė';
        }, 3600);
        setTimeout(() => {
            document.getElementById("aruneBanuskeviciute").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passBerzunaSimaityte) == true) {
        document.cookie = "berzunaSimaityte=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("berzunaSimaityte").style.display = "block";
            document.getElementById("errorName").value = 'Beržūna Šimaitytė';
        }, 3600);
        setTimeout(() => {
            document.getElementById("berzunaSimaityte").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passDomasLenartavicius) == true) {
        document.cookie = "domasLenartavicius=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("domasLenartavicius").style.display = "block";
            document.getElementById("errorName").value = 'Domas Lenartavičius';
        }, 3600);
        setTimeout(() => {
            document.getElementById("domasLenartavicius").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passEdvinMagazejev) == true) {
        document.cookie = "edvinMagazejev=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("edvinMagazejev").style.display = "block";
            document.getElementById("errorName").value = 'Edvin Magazejev';
        }, 3600);
        setTimeout(() => {
            document.getElementById("edvinMagazejev").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passGabrieleRagosko) == true) {
        document.cookie = "gabrieleRagosko=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("gabrieleRagosko").style.display = "block";
            document.getElementById("errorName").value = 'Gabrielė Ragoško';
        }, 3600);
        setTimeout(() => {
            document.getElementById("gabrieleRagosko").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passJurgisMuntrimas) == true) {
        document.cookie = "jurgisMuntrimas=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("jurgisMuntrimas").style.display = "block";
            document.getElementById("errorName").value = 'Jurgis Muntrimas';
        }, 3600);
        setTimeout(() => {
            document.getElementById("jurgisMuntrimas").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passJustinaCepaite) == true) {
        document.cookie = "justinaCepaite=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("justinaCepaite").style.display = "block";
            document.getElementById("errorName").value = 'Justina Čepaitė';
        }, 3600);
        setTimeout(() => {
            document.getElementById("justinaCepaite").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passKamileVaranauskaite) == true) {
        document.cookie = "kamileVaranauskaite=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("kamileVaranauskaite").style.display = "block";
            document.getElementById("errorName").value = 'Kamilė Varanauskaitė';
        }, 3600);
        setTimeout(() => {
            document.getElementById("kamileVaranauskaite").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passLijanaRadkeviciute) == true) {
        document.cookie = "lijanaRadkeviciute=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("lijanaRadkeviciute").style.display = "block";
            document.getElementById("errorName").value = 'Lijana Radkevičiūtė';
        }, 3600);
        setTimeout(() => {
            document.getElementById("lijanaRadkeviciute").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passMatasKasparavicius) == true) {
        document.cookie = "matasKasparavicius=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("matasKasparavicius").style.display = "block";
            document.getElementById("errorName").value = 'Matas Kasparavičius';
        }, 3600);
        setTimeout(() => {
            document.getElementById("matasKasparavicius").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passMetaMelisaBukauskaite) == true) {
        document.cookie = "metaMelisaBukauskaite=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("metaMelisaBukauskaite").style.display = "block";
            document.getElementById("errorName").value = 'Mėta Melisa Bukauskaitė';
        }, 3600);
        setTimeout(() => {
            document.getElementById("metaMelisaBukauskaite").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passMetaPanavaite) == true) {
        document.cookie = "metaPanavaite=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("metaPanavaite").style.display = "block";
            document.getElementById("errorName").value = 'Mėta Panavaitė';
        }, 3600);
        setTimeout(() => {
            document.getElementById("metaPanavaite").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passNeivydasPleskovas) == true) {
        document.cookie = "neivydasPleskovas=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("neivydasPleskovas").style.display = "block";
            document.getElementById("errorName").value = 'Neivydas Pleškovas';
        }, 3600);
        setTimeout(() => {
            document.getElementById("neivydasPleskovas").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passNorbertasBorovskis) == true) {
        document.cookie = "norbertasBorovskis=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("norbertasBorovskis").style.display = "block";
            document.getElementById("errorName").value = 'Norbertas Borovskis';
        }, 3600);
        setTimeout(() => {
            document.getElementById("norbertasBorovskis").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passRugileKaniusaite) == true) {
        document.cookie = "rugileKaniusaite=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("rugileKaniusaite").style.display = "block";
            document.getElementById("errorName").value = 'Rugilė Kaniušaitė';
        }, 3600);
        setTimeout(() => {
            document.getElementById("rugileKaniusaite").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passRugileTamasauskaite) == true) {
        document.cookie = "rugileTamasauskaite=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("rugileTamasauskaite").style.display = "block";
            document.getElementById("errorName").value = 'Rugilė Tamašauskaitė';
        }, 3600);
        setTimeout(() => {
            document.getElementById("rugileTamasauskaite").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passSamantaKurec) == true) {
        document.cookie = "samantaKurec=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("samantaKurec").style.display = "block";
            document.getElementById("errorName").value = 'Samanta Kurec';
        }, 3600);
        setTimeout(() => {
            document.getElementById("samantaKurec").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passSauleBabaliauskaite) == true) {
        document.cookie = "sauleBabaliauskaite=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("sauleBabaliauskaite").style.display = "block";
            document.getElementById("errorName").value = 'Saulė Babaliauskaitė';
        }, 3600);
        setTimeout(() => {
            document.getElementById("sauleBabaliauskaite").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passSimonaSmatauskaite) == true) {
        document.cookie = "simonaSmatauskaite=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("simonaSmatauskaite").style.display = "block";
            document.getElementById("errorName").value = 'Simona Šmatauskaitė';
        }, 3600);
        setTimeout(() => {
            document.getElementById("simonaSmatauskaite").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else if(form.pin.value.includes(passSmilteBazeviciute) == true) {
        document.cookie = "smilteBazeviciute=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
        checkOnCommand();
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            document.getElementById("screen").style.top = "-100%";
            document.getElementById("screen").style.backgroundColor = "transparent";
            document.getElementById("display").style.top = "-100%";
            document.getElementById("smilteBazeviciute").style.display = "block";
            document.getElementById("errorName").value = 'Smiltė Bazevičiūtė';
        }, 3600);
        setTimeout(() => {
            document.getElementById("smilteBazeviciute").style.paddingTop = "0";
            document.getElementById("infoSimtadienis").style.display = "flex";
            document.getElementById("pinnedBottom").style.display = "flex";
        }, 3610);
        setTimeout(() => {
            checkOffCommand();
            document.getElementById("loading").style.display = "none";
            document.getElementById("body").style.overflowX = "hidden";
            document.getElementById("body").style.overflowY = "scroll";
        }, 3900);
    }
    else {
        checkOnCommand();
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "-100px";
            document.getElementById("keypad").style.opacity = "1";
            document.getElementById("ivestiKoda").style.opacity = "1";
            checkOffCommand();
        }, 3600);
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "100px";
        }, 3700);
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "-100px";
        }, 3800);
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "100px";
        }, 3900);
        setTimeout(() => {
            document.getElementById("taskeliai").style.marginLeft = "0";
            document.getElementById("loading").style.display = "none";
        }, 4000);
    }
}

svecias = getCookie("svecias");
if (svecias != "") {
    document.getElementById("svecias").style.display = "block";
    document.getElementById("svecias").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Svečias';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("svecias").style.display = "none";
    document.getElementById("svecias").style.paddingTop = "100vh";
    if (svecias != "" && svecias != null) {
        document.getElementById("svecias").style.display = "none";
        document.getElementById("svecias").style.paddingTop = "100vh";
    }
}

adrianaCerepokaite = getCookie("adrianaCerepokaite");
if (adrianaCerepokaite != "") {
    document.getElementById("adrianaCerepokaite").style.display = "block";
    document.getElementById("adrianaCerepokaite").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Adriana Čerepokaitė';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("adrianaCerepokaite").style.display = "none";
    document.getElementById("adrianaCerepokaite").style.paddingTop = "100vh";
    if (adrianaCerepokaite != "" && adrianaCerepokaite != null) {
        document.getElementById("adrianaCerepokaite").style.display = "none";
        document.getElementById("adrianaCerepokaite").style.paddingTop = "100vh";
    }
}

agotaKieraite = getCookie("agotaKieraite");
if (agotaKieraite != "") {
    document.getElementById("agotaKieraite").style.display = "block";
    document.getElementById("agotaKieraite").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Agota Kieraitė';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("agotaKieraite").style.display = "none";
    document.getElementById("agotaKieraite").style.paddingTop = "100vh";
    if (agotaKieraite != "" && agotaKieraite != null) {
        document.getElementById("agotaKieraite").style.display = "none";
        document.getElementById("agotaKieraite").style.paddingTop = "100vh";
    }
}

armandasJokubauskas = getCookie("armandasJokubauskas");
if (armandasJokubauskas != "") {
    document.getElementById("armandasJokubauskas").style.display = "block";
    document.getElementById("armandasJokubauskas").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Armandas Jokubauskas';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("armandasJokubauskas").style.display = "none";
    document.getElementById("armandasJokubauskas").style.paddingTop = "100vh";
    if (armandasJokubauskas != "" && armandasJokubauskas != null) {
        document.getElementById("armandasJokubauskas").style.display = "none";
        document.getElementById("armandasJokubauskas").style.paddingTop = "100vh";
    }
}

arnasLapenas = getCookie("arnasLapenas");
if (arnasLapenas != "") {
    document.getElementById("arnasLapenas").style.display = "block";
    document.getElementById("arnasLapenas").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Arnas Lapėnas';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("arnasLapenas").style.display = "none";
    document.getElementById("arnasLapenas").style.paddingTop = "100vh";
    if (arnasLapenas != "" && arnasLapenas != null) {
        document.getElementById("arnasLapenas").style.display = "none";
        document.getElementById("arnasLapenas").style.paddingTop = "100vh";
    }
}

arturVelicko = getCookie("arturVelicko");
if (arturVelicko != "") {
    document.getElementById("arturVelicko").style.display = "block";
    document.getElementById("arturVelicko").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Artur Veličko';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("arturVelicko").style.display = "none";
    document.getElementById("arturVelicko").style.paddingTop = "100vh";
    if (arturVelicko != "" && arturVelicko != null) {
        document.getElementById("arturVelicko").style.display = "none";
        document.getElementById("arturVelicko").style.paddingTop = "100vh";
    }
}

aruneBanuskeviciute = getCookie("aruneBanuskeviciute");
if (aruneBanuskeviciute != "") {
    document.getElementById("aruneBanuskeviciute").style.display = "block";
    document.getElementById("aruneBanuskeviciute").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Arūnė Banuškevičiūtė';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("aruneBanuskeviciute").style.display = "none";
    document.getElementById("aruneBanuskeviciute").style.paddingTop = "100vh";
    if (aruneBanuskeviciute != "" && aruneBanuskeviciute != null) {
        document.getElementById("aruneBanuskeviciute").style.display = "none";
        document.getElementById("aruneBanuskeviciute").style.paddingTop = "100vh";
    }
}

berzunaSimaityte = getCookie("berzunaSimaityte");
if (berzunaSimaityte != "") {
    document.getElementById("berzunaSimaityte").style.display = "block";
    document.getElementById("berzunaSimaityte").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Beržūna Šimaitytė';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("berzunaSimaityte").style.display = "none";
    document.getElementById("berzunaSimaityte").style.paddingTop = "100vh";
    if (berzunaSimaityte != "" && berzunaSimaityte != null) {
        document.getElementById("berzunaSimaityte").style.display = "none";
        document.getElementById("berzunaSimaityte").style.paddingTop = "100vh";
    }
}

domasLenartavicius = getCookie("domasLenartavicius");
if (domasLenartavicius != "") {
    document.getElementById("domasLenartavicius").style.display = "block";
    document.getElementById("domasLenartavicius").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Domas Lenartavičius';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("domasLenartavicius").style.display = "none";
    document.getElementById("domasLenartavicius").style.paddingTop = "100vh";
    if (domasLenartavicius != "" && domasLenartavicius != null) {
        document.getElementById("domasLenartavicius").style.display = "none";
        document.getElementById("domasLenartavicius").style.paddingTop = "100vh";
    }
}

edvinMagazejev = getCookie("edvinMagazejev");
if (edvinMagazejev != "") {
    document.getElementById("edvinMagazejev").style.display = "block";
    document.getElementById("edvinMagazejev").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Edvin Magazejev';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("edvinMagazejev").style.display = "none";
    document.getElementById("edvinMagazejev").style.paddingTop = "100vh";
    if (edvinMagazejev != "" && edvinMagazejev != null) {
        document.getElementById("edvinMagazejev").style.display = "none";
        document.getElementById("edvinMagazejev").style.paddingTop = "100vh";
    }
}

gabrieleRagosko = getCookie("gabrieleRagosko");
if (gabrieleRagosko != "") {
    document.getElementById("gabrieleRagosko").style.display = "block";
    document.getElementById("gabrieleRagosko").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Gabrielė Ragoško';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("gabrieleRagosko").style.display = "none";
    document.getElementById("gabrieleRagosko").style.paddingTop = "100vh";
    if (gabrieleRagosko != "" && gabrieleRagosko != null) {
        document.getElementById("gabrieleRagosko").style.display = "none";
        document.getElementById("gabrieleRagosko").style.paddingTop = "100vh";
    }
}

jurgisMuntrimas = getCookie("jurgisMuntrimas");
if (jurgisMuntrimas != "") {
    document.getElementById("jurgisMuntrimas").style.display = "block";
    document.getElementById("jurgisMuntrimas").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Jurgis Muntrimas';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("jurgisMuntrimas").style.display = "none";
    document.getElementById("jurgisMuntrimas").style.paddingTop = "100vh";
    if (jurgisMuntrimas != "" && jurgisMuntrimas != null) {
        document.getElementById("jurgisMuntrimas").style.display = "none";
        document.getElementById("jurgisMuntrimas").style.paddingTop = "100vh";
    }
}

justinaCepaite = getCookie("justinaCepaite");
if (justinaCepaite != "") {
    document.getElementById("justinaCepaite").style.display = "block";
    document.getElementById("justinaCepaite").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Justina Čepaitė';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("justinaCepaite").style.display = "none";
    document.getElementById("justinaCepaite").style.paddingTop = "100vh";
    if (justinaCepaite != "" && justinaCepaite != null) {
        document.getElementById("justinaCepaite").style.display = "none";
        document.getElementById("justinaCepaite").style.paddingTop = "100vh";
    }
}

kamileVaranauskaite = getCookie("kamileVaranauskaite");
if (kamileVaranauskaite != "") {
    document.getElementById("kamileVaranauskaite").style.display = "block";
    document.getElementById("kamileVaranauskaite").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Kamilė Varanauskaitė';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("kamileVaranauskaite").style.display = "none";
    document.getElementById("kamileVaranauskaite").style.paddingTop = "100vh";
    if (kamileVaranauskaite != "" && kamileVaranauskaite != null) {
        document.getElementById("kamileVaranauskaite").style.display = "none";
        document.getElementById("kamileVaranauskaite").style.paddingTop = "100vh";
    }
}

lijanaRadkeviciute = getCookie("lijanaRadkeviciute");
if (lijanaRadkeviciute != "") {
    document.getElementById("lijanaRadkeviciute").style.display = "block";
    document.getElementById("lijanaRadkeviciute").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Lijana Radkevičiūtė';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("lijanaRadkeviciute").style.display = "none";
    document.getElementById("lijanaRadkeviciute").style.paddingTop = "100vh";
    if (lijanaRadkeviciute != "" && lijanaRadkeviciute != null) {
        document.getElementById("lijanaRadkeviciute").style.display = "none";
        document.getElementById("lijanaRadkeviciute").style.paddingTop = "100vh";
    }
}

matasKasparavicius = getCookie("matasKasparavicius");
if (matasKasparavicius != "") {
    document.getElementById("matasKasparavicius").style.display = "block";
    document.getElementById("matasKasparavicius").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Matas Kasparavičius';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("matasKasparavicius").style.display = "none";
    document.getElementById("matasKasparavicius").style.paddingTop = "100vh";
    if (matasKasparavicius != "" && matasKasparavicius != null) {
        document.getElementById("matasKasparavicius").style.display = "none";
        document.getElementById("matasKasparavicius").style.paddingTop = "100vh";
    }
}

metaMelisaBukauskaite = getCookie("metaMelisaBukauskaite");
if (metaMelisaBukauskaite != "") {
    document.getElementById("metaMelisaBukauskaite").style.display = "block";
    document.getElementById("metaMelisaBukauskaite").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Mėta Melisa Bukauskaitė';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("metaMelisaBukauskaite").style.display = "none";
    document.getElementById("metaMelisaBukauskaite").style.paddingTop = "100vh";
    if (metaMelisaBukauskaite != "" && metaMelisaBukauskaite != null) {
        document.getElementById("metaMelisaBukauskaite").style.display = "none";
        document.getElementById("metaMelisaBukauskaite").style.paddingTop = "100vh";
    }
}

metaPanavaite = getCookie("metaPanavaite");
if (metaPanavaite != "") {
    document.getElementById("metaPanavaite").style.display = "block";
    document.getElementById("metaPanavaite").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Mėta Panavaitė';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("metaPanavaite").style.display = "none";
    document.getElementById("metaPanavaite").style.paddingTop = "100vh";
    if (metaPanavaite != "" && metaPanavaite != null) {
        document.getElementById("metaPanavaite").style.display = "none";
        document.getElementById("metaPanavaite").style.paddingTop = "100vh";
    }
}

neivydasPleskovas = getCookie("neivydasPleskovas");
if (neivydasPleskovas != "") {
    document.getElementById("neivydasPleskovas").style.display = "block";
    document.getElementById("neivydasPleskovas").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Neivydas Pleškovas';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("neivydasPleskovas").style.display = "none";
    document.getElementById("neivydasPleskovas").style.paddingTop = "100vh";
    if (neivydasPleskovas != "" && neivydasPleskovas != null) {
        document.getElementById("neivydasPleskovas").style.display = "none";
        document.getElementById("neivydasPleskovas").style.paddingTop = "100vh";
    }
}

norbertasBorovskis = getCookie("norbertasBorovskis");
if (norbertasBorovskis != "") {
    document.getElementById("norbertasBorovskis").style.display = "block";
    document.getElementById("norbertasBorovskis").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Norbertas Borovskis';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("norbertasBorovskis").style.display = "none";
    document.getElementById("norbertasBorovskis").style.paddingTop = "100vh";
    if (norbertasBorovskis != "" && norbertasBorovskis != null) {
        document.getElementById("norbertasBorovskis").style.display = "none";
        document.getElementById("norbertasBorovskis").style.paddingTop = "100vh";
    }
}

rugileKaniusaite = getCookie("rugileKaniusaite");
if (rugileKaniusaite != "") {
    document.getElementById("rugileKaniusaite").style.display = "block";
    document.getElementById("rugileKaniusaite").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Rugilė Kaniušaitė';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("rugileKaniusaite").style.display = "none";
    document.getElementById("rugileKaniusaite").style.paddingTop = "100vh";
    if (rugileKaniusaite != "" && rugileKaniusaite != null) {
        document.getElementById("rugileKaniusaite").style.display = "none";
        document.getElementById("rugileKaniusaite").style.paddingTop = "100vh";
    }
}

rugileTamasauskaite = getCookie("rugileTamasauskaite");
if (rugileTamasauskaite != "") {
    document.getElementById("rugileTamasauskaite").style.display = "block";
    document.getElementById("rugileTamasauskaite").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Rugilė Tamašauskaitė';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("rugileTamasauskaite").style.display = "none";
    document.getElementById("rugileTamasauskaite").style.paddingTop = "100vh";
    if (rugileTamasauskaite != "" && rugileTamasauskaite != null) {
        document.getElementById("rugileTamasauskaite").style.display = "none";
        document.getElementById("rugileTamasauskaite").style.paddingTop = "100vh";
    }
}

samantaKurec = getCookie("samantaKurec");
if (samantaKurec != "") {
    document.getElementById("samantaKurec").style.display = "block";
    document.getElementById("samantaKurec").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Samanta Kurec';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("samantaKurec").style.display = "none";
    document.getElementById("samantaKurec").style.paddingTop = "100vh";
    if (samantaKurec != "" && samantaKurec != null) {
        document.getElementById("samantaKurec").style.display = "none";
        document.getElementById("samantaKurec").style.paddingTop = "100vh";
    }
}

sauleBabaliauskaite = getCookie("sauleBabaliauskaite");
if (sauleBabaliauskaite != "") {
    document.getElementById("sauleBabaliauskaite").style.display = "block";
    document.getElementById("sauleBabaliauskaite").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Saulė Babaliauskaitė';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("sauleBabaliauskaite").style.display = "none";
    document.getElementById("sauleBabaliauskaite").style.paddingTop = "100vh";
    if (sauleBabaliauskaite != "" && sauleBabaliauskaite != null) {
        document.getElementById("sauleBabaliauskaite").style.display = "none";
        document.getElementById("sauleBabaliauskaite").style.paddingTop = "100vh";
    }
}

simonaSmatauskaite = getCookie("simonaSmatauskaite");
if (simonaSmatauskaite != "") {
    document.getElementById("simonaSmatauskaite").style.display = "block";
    document.getElementById("simonaSmatauskaite").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Simona Šmatauskaitė';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("simonaSmatauskaite").style.display = "none";
    document.getElementById("simonaSmatauskaite").style.paddingTop = "100vh";
    if (simonaSmatauskaite != "" && simonaSmatauskaite != null) {
        document.getElementById("simonaSmatauskaite").style.display = "none";
        document.getElementById("simonaSmatauskaite").style.paddingTop = "100vh";
    }
}

smilteBazeviciute = getCookie("smilteBazeviciute");
if (smilteBazeviciute != "") {
    document.getElementById("smilteBazeviciute").style.display = "block";
    document.getElementById("smilteBazeviciute").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Smiltė Bazevičiūtė';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("smilteBazeviciute").style.display = "none";
    document.getElementById("smilteBazeviciute").style.paddingTop = "100vh";
    if (smilteBazeviciute != "" && smilteBazeviciute != null) {
        document.getElementById("smilteBazeviciute").style.display = "none";
        document.getElementById("smilteBazeviciute").style.paddingTop = "100vh";
    }
}

if (svecias != "" || adrianaCerepokaite != "" || agotaKieraite != "" || armandasJokubauskas != "" || arnasLapenas != "" || arturVelicko != "" || aruneBanuskeviciute != "" || berzunaSimaityte != "" || domasLenartavicius != "" || edvinMagazejev != "" || gabrieleRagosko != "" || jurgisMuntrimas != "" || justinaCepaite != "" || kamileVaranauskaite != "" || lijanaRadkeviciute != "" || matasKasparavicius != "" || metaMelisaBukauskaite != "" || metaPanavaite != "" || neivydasPleskovas != "" || norbertasBorovskis != "" || rugileKaniusaite != "" || rugileTamasauskaite != "" || samantaKurec != "" || sauleBabaliauskaite != "" || simonaSmatauskaite != "" || smilteBazeviciute != "") {
    document.getElementById("screen").style.top = "-100%";
    document.getElementById("screen").style.backgroundColor = "transparent";
    document.getElementById("display").style.top = "-100%";
    document.getElementById("infoSimtadienis").style.display = "flex";
    document.getElementById("pinnedBottom").style.display = "flex";
    document.querySelector(".langas").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("body").style.overflowX = "hidden";
        document.getElementById("body").style.overflowY = "scroll";
    }, 2000);
}
else {
    document.getElementById("screen").style.top = "0";
    document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    document.getElementById("display").style.top = "0";
    document.getElementById("body").style.overflowX = "hidden";
    document.getElementById("body").style.overflowY = "hidden";
    document.getElementById("infoSimtadienis").style.display = "none";
    document.getElementById("pinnedBottom").style.display = "none";
    if (svecias != "" && svecias != null || adrianaCerepokaite != "" && adrianaCerepokaite != null || agotaKieraite != "" && agotaKieraite != null || armandasJokubauskas != "" && armandasJokubauskas != null || arnasLapenas != "" && arnasLapenas != null || arturVelicko != "" && arturVelicko != null || aruneBanuskeviciute != "" && aruneBanuskeviciute != null || berzunaSimaityte != "" && berzunaSimaityte != null || domasLenartavicius != "" && domasLenartavicius != null || edvinMagazejev != "" && edvinMagazejev != null || gabrieleRagosko != "" && gabrieleRagosko != null || jurgisMuntrimas != "" && jurgisMuntrimas != null || justinaCepaite != "" && justinaCepaite != null || kamileVaranauskaite != "" && kamileVaranauskaite != null || lijanaRadkeviciute != "" && lijanaRadkeviciute != null || matasKasparavicius != "" && matasKasparavicius != null || metaMelisaBukauskaite != "" && metaMelisaBukauskaite != null || metaPanavaite != "" && metaPanavaite != null || neivydasPleskovas != "" && neivydasPleskovas != null || norbertasBorovskis != "" && norbertasBorovskis != null || rugileKaniusaite != "" && rugileKaniusaite != null || rugileTamasauskaite != "" && rugileTamasauskaite != null || samantaKurec != "" && samantaKurec != null || sauleBabaliauskaite != "" && sauleBabaliauskaite != null || simonaSmatauskaite != "" && simonaSmatauskaite != null || smilteBazeviciute != "" && smilteBazeviciute != null) {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("body").style.overflowX = "hidden";
        document.getElementById("body").style.overflowY = "hidden";
        document.getElementById("infoSimtadienis").style.display = "none";
        document.getElementById("pinnedBottom").style.display = "none";
    }
}
function closeSimtadienis() {
    document.cookie = "svecias=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "adrianaCerepokaite=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "agotaKieraite=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "armandasJokubauskas=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "arnasLapenas=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "arturVelicko=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "aruneBanuskeviciute=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "berzunaSimaityte=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "domasLenartavicius=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "edvinMagazejev=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "gabrieleRagosko=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "jurgisMuntrimas=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "justinaCepaite=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "kamileVaranauskaite=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "lijanaRadkeviciute=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "matasKasparavicius=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "metaMelisaBukauskaite=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "metaPanavaite=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "neivydasPleskovas=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "norbertasBorovskis=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "rugileKaniusaite=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "rugileTamasauskaite=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "samantaKurec=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "sauleBabaliauskaite=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "simonaSmatauskaite=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "smilteBazeviciute=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.getElementById("simtadienisUzdarymas").style.pointerEvents = "none";
    setTimeout(() => {
        document.getElementById("screen").style.top = "0";
        document.getElementById("screen").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
        document.getElementById("display").style.top = "0";
        document.getElementById("svecias").style.paddingTop = "100vh";
        document.getElementById("adrianaCerepokaite").style.paddingTop = "100vh";
        document.getElementById("agotaKieraite").style.paddingTop = "100vh";
        document.getElementById("armandasJokubauskas").style.paddingTop = "100vh";
        document.getElementById("arnasLapenas").style.paddingTop = "100vh";
        document.getElementById("arturVelicko").style.paddingTop = "100vh";
        document.getElementById("aruneBanuskeviciute").style.paddingTop = "100vh";
        document.getElementById("berzunaSimaityte").style.paddingTop = "100vh";
        document.getElementById("domasLenartavicius").style.paddingTop = "100vh";
        document.getElementById("edvinMagazejev").style.paddingTop = "100vh";
        document.getElementById("gabrieleRagosko").style.paddingTop = "100vh";
        document.getElementById("jurgisMuntrimas").style.paddingTop = "100vh";
        document.getElementById("justinaCepaite").style.paddingTop = "100vh";
        document.getElementById("kamileVaranauskaite").style.paddingTop = "100vh";
        document.getElementById("lijanaRadkeviciute").style.paddingTop = "100vh";
        document.getElementById("matasKasparavicius").style.paddingTop = "100vh";
        document.getElementById("metaMelisaBukauskaite").style.paddingTop = "100vh";
        document.getElementById("metaPanavaite").style.paddingTop = "100vh";
        document.getElementById("neivydasPleskovas").style.paddingTop = "100vh";
        document.getElementById("norbertasBorovskis").style.paddingTop = "100vh";
        document.getElementById("rugileKaniusaite").style.paddingTop = "100vh";
        document.getElementById("rugileTamasauskaite").style.paddingTop = "100vh";
        document.getElementById("samantaKurec").style.paddingTop = "100vh";
        document.getElementById("sauleBabaliauskaite").style.paddingTop = "100vh";
        document.getElementById("simonaSmatauskaite").style.paddingTop = "100vh";
        document.getElementById("smilteBazeviciute").style.paddingTop = "100vh";
        document.getElementById("infoSimtadienis").style.display = "none";
    }, 10);
    setTimeout(() => {
        document.getElementById("simtadienisUzdarymas").style.pointerEvents = "all";
        document.getElementById("body").style.overflow = "hidden";
        document.getElementById("svecias").style.display = "none";
        document.getElementById("adrianaCerepokaite").style.display = "none";
        document.getElementById("agotaKieraite").style.display = "none";
        document.getElementById("armandasJokubauskas").style.display = "none";
        document.getElementById("arnasLapenas").style.display = "none";
        document.getElementById("arturVelicko").style.display = "none";
        document.getElementById("aruneBanuskeviciute").style.display = "none";
        document.getElementById("berzunaSimaityte").style.display = "none";
        document.getElementById("domasLenartavicius").style.display = "none";
        document.getElementById("edvinMagazejev").style.display = "none";
        document.getElementById("gabrieleRagosko").style.display = "none";
        document.getElementById("jurgisMuntrimas").style.display = "none";
        document.getElementById("justinaCepaite").style.display = "none";
        document.getElementById("kamileVaranauskaite").style.display = "none";
        document.getElementById("lijanaRadkeviciute").style.display = "none";
        document.getElementById("matasKasparavicius").style.display = "none";
        document.getElementById("metaMelisaBukauskaite").style.display = "none";
        document.getElementById("metaPanavaite").style.display = "none";
        document.getElementById("neivydasPleskovas").style.display = "none";
        document.getElementById("norbertasBorovskis").style.display = "none";
        document.getElementById("rugileKaniusaite").style.display = "none";
        document.getElementById("rugileTamasauskaite").style.display = "none";
        document.getElementById("samantaKurec").style.display = "none";
        document.getElementById("sauleBabaliauskaite").style.display = "none";
        document.getElementById("simonaSmatauskaite").style.display = "none";
        document.getElementById("smilteBazeviciute").style.display = "none";
        document.getElementById("infoSimtadienis").style.display = "none";
    }, 310);
}