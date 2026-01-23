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
function adjustPinnedBottom() {
    let bodyRect = document.body.getBoundingClientRect(),
    elemRect = document.getElementById("pinnedBottom").getBoundingClientRect(),
    kaire = elemRect.left - bodyRect.left;
    document.getElementById("pinnedBottom").style.bottom = kaire + "px";
    document.getElementById("body").style.paddingBottom = (kaire + 75) + "px";
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

    document.getElementById("agotaKieraiteRole").innerHTML = atob('TGlldHV2b3MgdGFsZW50') + 'ų' + atob('IHZlZA==') + 'ė' + atob('amE=');
    document.getElementById("aleksandraKravcionokRole").innerHTML = atob('VmlrdG9yaWpvcyBwYXJvZGlqYQ==');
    document.getElementById("armandasJakubauskasRole").innerHTML = atob('TWV0') + 'ų' + atob('IGFwZG92YW5vamlt') + 'ų' + atob('IHZlZA==') + 'ė' + atob('amFz');
    document.getElementById("arturVelickoRole").innerHTML = atob('RGFuaWVsaWF1cyBwYXJvZGlqYQ==');
    document.getElementById("aruneBanuskeviciuteRole").innerHTML = atob('VGVpcw==') + 'ė' + atob('amEgMg==');
    document.getElementById("augiusBacinskasRole").innerHTML = atob('RWtzdHJhc2Vuc2FzIDQ=');
    document.getElementById("berzunaSimaityteRole").innerHTML = atob('R2FicmllbA==') + 'ė' + atob('cyBwYXJvZGlqYQ==');
    document.getElementById("danieliusKurockinRole").innerHTML = atob('S29taWthcw==');
    document.getElementById("domasLenartaviciusRole").innerHTML = atob('RmFyYXMgbnIuIDE=');
    document.getElementById("dominikaAndruskevicRole").innerHTML = atob('QWRlbGlqb3MgcGFyb2RpamE=');
    document.getElementById("edvinMagazejevRole").innerHTML = atob('RmFyYXMgbnIuIDM=');
    document.getElementById("emilijaSergatiukaiteRole").innerHTML = atob('RG92YW4=') + 'ė' + atob('bGk=') + 'ų' + atob('IGRhbGludG9qYQ==');
    document.getElementById("gabrieleRagoskoRole").innerHTML = atob('QXVrc2luaW8gcHJvdG8gdmVk') + 'ė' + atob('amE=');
    document.getElementById("gretaRimsaiteRole").innerHTML = atob('RG92YW4=') + 'ė' + atob('bGk=') + 'ų' + atob('IGRhbGludG9qYQ==');
    document.getElementById("ilahaDadashovaRole").innerHTML = atob('RWtzdHJhc2Vucw==') + 'ė' + atob('IDE=');
    document.getElementById("justinaCepaiteRole").innerHTML = atob('U3RhbmQgdXAnZXI=') + 'ė';
    document.getElementById("kamileVaranauskaiteRole").innerHTML = atob('RWtzdHJhc2Vucw==') + 'ų' + atob('IHZlZA==') + 'ė' + atob('amE=');
    document.getElementById("lijanaRadkeviciuteRole").innerHTML = atob('VGVpcw==') + 'ė' + atob('amEgMw==');
    document.getElementById("matasKasparaviciusRole").innerHTML = atob('QmVhdG9zIGFzaXN0ZW50YXMgJiBFa3N0cmFzZW5zYXMgMw==');
    document.getElementById("metaMelisaBukauskaiteRole").innerHTML = atob('VGVpcw==') + 'ė' + atob('amEgMQ==');
    document.getElementById("metaPanavaiteRole").innerHTML = atob('RWtzdHJhc2Vucw==') + 'ė' + atob('IDI=');
    document.getElementById("neivydasPleskovasRole").innerHTML = atob('RmFyYXMgbnIuIDI=');
    document.getElementById("nikitaSimovicRole").innerHTML = atob('RG9tYW50byBwYXJvZGlqYQ==');
    document.getElementById("norbertasBorovskisRole").innerHTML = atob('QXVrc2luaW8gcHJvdG8gdmVk') + 'ė' + atob('amFz');
    document.getElementById("rugileKaniusaiteRole").innerHTML = atob('U3RhbmQgdXAnZXI=') + 'ė';
    document.getElementById("samantaKurecRole").innerHTML = atob('UGF1bGlub3MgcGFyb2RpamE=');
    document.getElementById("sauleBabaliauskaiteRole").innerHTML = atob('VmllbnVvbGlrdG9r') + 'ė';
    document.getElementById("simonaSmatauskaiteRole").innerHTML = atob('QmVhdGE=');
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

let passSvecias = atob('MDAwMDAw'); // 000000

let passAgotaKieraite = atob('NTAwNDc4');
let passAleksandraKravcionok = atob('NDkzNzkz');
let passArmandasJakubauskas = atob('OTU0NTE4');
let passArturVelicko = atob('MTkxMzkw');
let passAruneBanuskeviciute = atob('ODI3NDgy');
let passAugiusBacinskas = atob('ODMwNTc0');
let passBerzunaSimaityte = atob('NjQ1NzUx');
let passDanieliusKurockin = atob('MjA4NTcx');
let passDomasLenartavicius = atob('MzI1Njc0');
let passDominikaAndruskevic = atob('NDY2NDA3');
let passEdvinMagazejev = atob('MTA0MDYy');
let passEmilijaSergatiukaite = atob('NzU5ODc2');
let passGabrieleRagosko = atob('MDM5NTg2');
let passGretaRimsaite = atob('MDU0MTYw');
let passIlahaDadashova = atob('OTkxMDY3');
let passJustinaCepaite = atob('NTM4MjA0');
let passKamileVaranauskaite = atob('ODkzMjc1');
let passLijanaRadkeviciute = atob('MDgzNzM0');
let passMatasKasparavicius = atob('NzQyMDk0');
let passMetaMelisaBukauskaite = atob('MDI4NDgy');
let passMetaPanavaite = atob('NTQ5Mjcy');
let passNeivydasPleskovas = atob('MzY2NDU5');
let passNikitaSimovic = atob('NDQwMjk3');
let passNorbertasBorovskis = atob('MTgzNzQ4');
let passRugileKaniusaite = atob('NDIxMzY5');
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
        document.getElementById("soundManager").style.bottom = "0";
        document.getElementById("soundManagerNav").style.top = "0";
        document.querySelector(".langas").style.opacity = "0";
    }, 10);
}
function closeSoundTracks() {
    document.getElementById("body").style.overflowY = "scroll";
    setTimeout(() => {
        document.querySelector(".langas").style.opacity = "1";
        document.getElementById("soundManager").style.bottom = "-100%";
        document.getElementById("soundManagerNav").style.top = "100%";
        document.getElementById("soundPlayer").style.bottom = '-100%';
        sound.pause();
        soundPlayPauseIcon.classList.remove("fa-pause");
        soundPlayPauseIcon.classList.add("fa-play");
        sound.currentTime = 0;
        document.getElementById("currentTrackName").innerText = 'Garso takelio pavadinimas';
        document.getElementById("soundDuration").innerText = '0:00';
        document.getElementById("soundManager").style.paddingBottom = '0';
    }, 10);
}

let progress = document.getElementById('playProgress');
let progressBg = document.getElementById('progressBg');
let sound = document.getElementById('sound');
let soundPlayPauseIcon = document.getElementById('soundPlayPauseIcon');

function playPause(){
    if(soundPlayPauseIcon.classList.contains("fa-pause")){
        sound.pause();
        soundPlayPauseIcon.classList.remove("fa-pause");
        soundPlayPauseIcon.classList.add("fa-play");
    }
    else{
        sound.play();
        soundPlayPauseIcon.classList.add("fa-pause");
        soundPlayPauseIcon.classList.remove("fa-play");
    }
}

sound.onended = function() {
    soundPlayPauseIcon.classList.remove("fa-pause");
    soundPlayPauseIcon.classList.add("fa-play");
}

sound.addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progress.style.width = `${progressWidth}%`;

    let musicCurrentTime = document.getElementById("timePlayed");

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10){
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

progressBg.addEventListener("click", (e)=>{
    let progressWidthval = progressBg.clientWidth;
    let clickedOffSetX = e.offsetX;
    let soundDuration = sound.duration;

    sound.currentTime = (clickedOffSetX / progressWidthval) * soundDuration;
    sound.play();
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
});

function positionAudioDownloadBtn(){
    document.getElementById("atsisiunciamasAudioBg").style.transition = "none";
    let bodyRect = document.body.getBoundingClientRect(),
    elemRect = document.getElementById('downloadAudioBtn').getBoundingClientRect(),
    kaire = elemRect.left - bodyRect.left;
    document.getElementById("atsisiunciamasAudioBg").style.left = kaire + "px";
}

function playSoundVaikinuSokis(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/vaikinu-sokis.mp3';
    sound.currentTime = 0;
    sound.play();
    document.getElementById('download_audio').href = 'sounds/vaikinu-sokis.mp3';
    document.getElementById('downloadingAudioName').innerHTML = 'vaikinu-sokis.mp3';
    positionAudioDownloadBtn()
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("soundPlayer").style.bottom = '15px';
    document.getElementById("currentTrackName").innerText = 'vaikinu-sokis.mp3';
    document.getElementById("soundDuration").innerText = '1:25';
    document.getElementById("soundManager").style.paddingBottom = '100px';
    setTimeout(() => {
        positionAudioDownloadBtn();
    }, 1);
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
        }, 300);
    });
}
function playSoundZioguGarsas(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/ziogu-garsas.mp3';
    sound.currentTime = 0;
    sound.play();
    document.getElementById('download_audio').href = 'sounds/ziogu-garsas.mp3';
    document.getElementById('downloadingAudioName').innerHTML = 'ziogu-garsas.mp3';
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("soundPlayer").style.bottom = '15px';
    document.getElementById("currentTrackName").innerText = 'ziogu-garsas.mp3';
    document.getElementById("soundDuration").innerText = '0:10';
    document.getElementById("soundManager").style.paddingBottom = '100px';
    setTimeout(() => {
        positionAudioDownloadBtn();
    }, 1);
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
        }, 300);
    });
}
function playSound3(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/burtai.mp3';
    sound.currentTime = 0;
    sound.play();
    document.getElementById('download_audio').href = 'sounds/burtai.mp3';
    document.getElementById('downloadingAudioName').innerHTML = 'burtai.mp3';
    positionAudioDownloadBtn()
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("soundPlayer").style.bottom = '15px';
    document.getElementById("currentTrackName").innerText = 'burtai.mp3';
    document.getElementById("soundDuration").innerText = '0:47';
    document.getElementById("soundManager").style.paddingBottom = '100px';
    setTimeout(() => {
        positionAudioDownloadBtn();
    }, 1);
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
        }, 300);
    });
}
function playSound4(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/seseliai.mp3';
    sound.currentTime = 0;
    sound.play();
    document.getElementById('download_audio').href = 'sounds/seseliai.mp3';
    document.getElementById('downloadingAudioName').innerHTML = 'seseliai.mp3';
    positionAudioDownloadBtn()
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("soundPlayer").style.bottom = '15px';
    document.getElementById("currentTrackName").innerText = 'seseliai.mp3';
    document.getElementById("soundDuration").innerText = '0:07';
    document.getElementById("soundManager").style.paddingBottom = '100px';
    setTimeout(() => {
        positionAudioDownloadBtn();
    }, 1);
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
        }, 300);
    });
}
function playSound5(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/sokis.mp3';
    sound.currentTime = 0;
    sound.play();
    document.getElementById('download_audio').href = 'sounds/sokis.mp3';
    document.getElementById('downloadingAudioName').innerHTML = 'sokis.mp3';
    positionAudioDownloadBtn()
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("soundPlayer").style.bottom = '15px';
    document.getElementById("currentTrackName").innerText = 'sokis.mp3';
    document.getElementById("soundDuration").innerText = '02:21';
    document.getElementById("soundManager").style.paddingBottom = '100px';
    setTimeout(() => {
        positionAudioDownloadBtn();
    }, 1);
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
        }, 300);
    });
}

function downloadAudio() {
    document.getElementById("pinnedBackground").style.display = "block";
    document.getElementById("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.getElementById("atsisiunciamasAudioBg").style.display = "flex";
        document.getElementById("atsisiunciamasAudio").style.display = "flex";
        document.getElementById("atsisiunciamasAudioBg").style.transition = "0.3s";
        document.getElementById("downloadAudioSpinnerDiv").style.animation = "spin2 0.65s linear infinite";
    }, 1);
    setTimeout(() => {
        document.getElementById("atsisiunciamasAudioBg").style.opacity = "1";
    }, 2);
    setTimeout(() => {
        document.getElementById("atsisiunciamasAudioBg").style.width = "100%";
        document.getElementById("atsisiunciamasAudioBg").style.height = "100%";
        document.getElementById("atsisiunciamasAudioBg").style.borderRadius = "0";
        document.getElementById("atsisiunciamasAudioBg").style.backgroundColor = "transparent";
        document.getElementById("atsisiunciamasAudioBg").style.bottom = "0";
        document.getElementById("atsisiunciamasAudioBg").style.left = "0";
        document.getElementById("pinnedBackground").style.opacity = "1";
    }, 10);
    setTimeout(() => {
        document.getElementById("download_audio").click();
    }, 1010);
    setTimeout(() => {
        document.getElementById("atsisiunciamasAudioBg").style.opacity = "0";
        document.getElementById("pinnedBackground").style.opacity = "0";
    }, 6010);
    setTimeout(() => {
        document.getElementById("atsisiunciamasAudioBg").style.display = "none";
        document.getElementById("atsisiunciamasAudioBg").style.opacity = "0";
        document.getElementById("atsisiunciamasAudioBg").style.width = "20px";
        document.getElementById("atsisiunciamasAudioBg").style.height = "20px";
        document.getElementById("atsisiunciamasAudioBg").style.borderRadius = "25px";
        document.getElementById("atsisiunciamasAudioBg").style.bottom = "65px";
        document.getElementById("atsisiunciamasAudioBg").style.left = "0";
        document.getElementById("pinnedBackground").style.opacity = "1";
        document.getElementById("pinnedBackground").style.display = "none";
        document.getElementById("body").style.overflowY = "scroll";
    }, 6310);
}




let inputas = "";
function keypadPress() {
    document.getElementById("kodas").value = inputas;
    document.getElementById("istrynimas").style.color = "white";
    document.getElementById("istrynimas").style.pointerEvents = "all";
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
function istrinti() {
    inputas = "";
    document.getElementById("kodas").value = '';
    document.getElementById("istrynimas").style.color = "transparent";
    document.getElementById("istrynimas").style.pointerEvents = "none";
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
}
function check(form)
{
    if(form.pin.value === passSvecias) {
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
    else if(form.pin.value === passAgotaKieraite) {
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
    else if(form.pin.value === passAleksandraKravcionok) {
        document.cookie = "aleksandraKravcionok=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
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
            document.getElementById("aleksandraKravcionok").style.display = "block";
            document.getElementById("errorName").value = 'Aleksandra Kravčionok';
        }, 3600);
        setTimeout(() => {
            document.getElementById("aleksandraKravcionok").style.paddingTop = "0";
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
    else if(form.pin.value === passArmandasJakubauskas) {
        document.cookie = "armandasJakubauskas=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
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
            document.getElementById("armandasJakubauskas").style.display = "block";
            document.getElementById("errorName").value = 'Armandas Jakubauskas';
        }, 3600);
        setTimeout(() => {
            document.getElementById("armandasJakubauskas").style.paddingTop = "0";
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
    else if(form.pin.value === passArturVelicko) {
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
    else if(form.pin.value === passAruneBanuskeviciute) {
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
    else if(form.pin.value === passAugiusBacinskas) {
        document.cookie = "augiusBacinskas=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
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
            document.getElementById("augiusBacinskas").style.display = "block";
            document.getElementById("errorName").value = 'Augius Bačinskas';
        }, 3600);
        setTimeout(() => {
            document.getElementById("augiusBacinskas").style.paddingTop = "0";
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
    else if(form.pin.value === passBerzunaSimaityte) {
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
    else if(form.pin.value === passDanieliusKurockin) {
        document.cookie = "danieliusKurockin=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
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
            document.getElementById("danieliusKurockin").style.display = "block";
            document.getElementById("errorName").value = 'Danielius Kuročkin';
        }, 3600);
        setTimeout(() => {
            document.getElementById("danieliusKurockin").style.paddingTop = "0";
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
    else if(form.pin.value === passDomasLenartavicius) {
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
    else if(form.pin.value === passDominikaAndruskevic) {
        document.cookie = "dominikaAndruskevic=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
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
            document.getElementById("dominikaAndruskevic").style.display = "block";
            document.getElementById("errorName").value = 'Dominika Andruškevič';
        }, 3600);
        setTimeout(() => {
            document.getElementById("dominikaAndruskevic").style.paddingTop = "0";
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
    else if(form.pin.value === passEdvinMagazejev) {
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
    else if(form.pin.value === passEmilijaSergatiukaite) {
        document.cookie = "emilijaSergatiukaite=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
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
            document.getElementById("emilijaSergatiukaite").style.display = "block";
            document.getElementById("errorName").value = 'Emilija Sergatiukaitė';
        }, 3600);
        setTimeout(() => {
            document.getElementById("emilijaSergatiukaite").style.paddingTop = "0";
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
    else if(form.pin.value === passGabrieleRagosko) {
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
    else if(form.pin.value === passGretaRimsaite) {
        document.cookie = "gretaRimsaite=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
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
            document.getElementById("gretaRimsaite").style.display = "block";
            document.getElementById("errorName").value = 'Greta Rimšaitė';
        }, 3600);
        setTimeout(() => {
            document.getElementById("gretaRimsaite").style.paddingTop = "0";
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
    else if(form.pin.value === passIlahaDadashova) {
        document.cookie = "ilahaDadashova=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
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
            document.getElementById("ilahaDadashova").style.display = "block";
            document.getElementById("errorName").value = 'Ilaha Dadashova';
        }, 3600);
        setTimeout(() => {
            document.getElementById("ilahaDadashova").style.paddingTop = "0";
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
    else if(form.pin.value === passJustinaCepaite) {
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
    else if(form.pin.value === passKamileVaranauskaite) {
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
    else if(form.pin.value === passLijanaRadkeviciute) {
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
    else if(form.pin.value === passMatasKasparavicius) {
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
    else if(form.pin.value === passMetaMelisaBukauskaite) {
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
    else if(form.pin.value === passMetaPanavaite) {
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
    else if(form.pin.value === passNeivydasPleskovas) {
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
    else if(form.pin.value === passNikitaSimovic) {
        document.cookie = "nikitaSimovic=true; expires=Sat, 01 Jan 2027 00:00:00 UTC";
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
            document.getElementById("nikitaSimovic").style.display = "block";
            document.getElementById("errorName").value = 'Nikita Simovič';
        }, 3600);
        setTimeout(() => {
            document.getElementById("nikitaSimovic").style.paddingTop = "0";
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
    else if(form.pin.value === passNorbertasBorovskis) {
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
    else if(form.pin.value === passRugileKaniusaite) {
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
    else if(form.pin.value === passSamantaKurec) {
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
    else if(form.pin.value === passSauleBabaliauskaite) {
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
    else if(form.pin.value === passSimonaSmatauskaite) {
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
    else if(form.pin.value === passSmilteBazeviciute) {
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

aleksandraKravcionok = getCookie("aleksandraKravcionok");
if (aleksandraKravcionok != "") {
    document.getElementById("aleksandraKravcionok").style.display = "block";
    document.getElementById("aleksandraKravcionok").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Aleksandra Kravčionok';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("aleksandraKravcionok").style.display = "none";
    document.getElementById("aleksandraKravcionok").style.paddingTop = "100vh";
    if (aleksandraKravcionok != "" && aleksandraKravcionok != null) {
        document.getElementById("aleksandraKravcionok").style.display = "none";
        document.getElementById("aleksandraKravcionok").style.paddingTop = "100vh";
    }
}

armandasJakubauskas = getCookie("armandasJakubauskas");
if (armandasJakubauskas != "") {
    document.getElementById("armandasJakubauskas").style.display = "block";
    document.getElementById("armandasJakubauskas").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Armandas Jakubauskas';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("armandasJakubauskas").style.display = "none";
    document.getElementById("armandasJakubauskas").style.paddingTop = "100vh";
    if (armandasJakubauskas != "" && armandasJakubauskas != null) {
        document.getElementById("armandasJakubauskas").style.display = "none";
        document.getElementById("armandasJakubauskas").style.paddingTop = "100vh";
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

augiusBacinskas = getCookie("augiusBacinskas");
if (augiusBacinskas != "") {
    document.getElementById("augiusBacinskas").style.display = "block";
    document.getElementById("augiusBacinskas").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Augius Bačinskas';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("augiusBacinskas").style.display = "none";
    document.getElementById("augiusBacinskas").style.paddingTop = "100vh";
    if (augiusBacinskas != "" && augiusBacinskas != null) {
        document.getElementById("augiusBacinskas").style.display = "none";
        document.getElementById("augiusBacinskas").style.paddingTop = "100vh";
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

danieliusKurockin = getCookie("danieliusKurockin");
if (danieliusKurockin != "") {
    document.getElementById("danieliusKurockin").style.display = "block";
    document.getElementById("danieliusKurockin").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Danielius Kuročkin';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("danieliusKurockin").style.display = "none";
    document.getElementById("danieliusKurockin").style.paddingTop = "100vh";
    if (danieliusKurockin != "" && danieliusKurockin != null) {
        document.getElementById("danieliusKurockin").style.display = "none";
        document.getElementById("danieliusKurockin").style.paddingTop = "100vh";
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

dominikaAndruskevic = getCookie("dominikaAndruskevic");
if (dominikaAndruskevic != "") {
    document.getElementById("dominikaAndruskevic").style.display = "block";
    document.getElementById("dominikaAndruskevic").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Dominika Andruškevič';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("dominikaAndruskevic").style.display = "none";
    document.getElementById("dominikaAndruskevic").style.paddingTop = "100vh";
    if (dominikaAndruskevic != "" && dominikaAndruskevic != null) {
        document.getElementById("dominikaAndruskevic").style.display = "none";
        document.getElementById("dominikaAndruskevic").style.paddingTop = "100vh";
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

emilijaSergatiukaite = getCookie("emilijaSergatiukaite");
if (emilijaSergatiukaite != "") {
    document.getElementById("emilijaSergatiukaite").style.display = "block";
    document.getElementById("emilijaSergatiukaite").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Emilija Sergatiukaitė';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("emilijaSergatiukaite").style.display = "none";
    document.getElementById("emilijaSergatiukaite").style.paddingTop = "100vh";
    if (emilijaSergatiukaite != "" && emilijaSergatiukaite != null) {
        document.getElementById("emilijaSergatiukaite").style.display = "none";
        document.getElementById("emilijaSergatiukaite").style.paddingTop = "100vh";
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

gretaRimsaite = getCookie("gretaRimsaite");
if (gretaRimsaite != "") {
    document.getElementById("gretaRimsaite").style.display = "block";
    document.getElementById("gretaRimsaite").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Greta Rimšaitė';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("gretaRimsaite").style.display = "none";
    document.getElementById("gretaRimsaite").style.paddingTop = "100vh";
    if (gretaRimsaite != "" && gretaRimsaite != null) {
        document.getElementById("gretaRimsaite").style.display = "none";
        document.getElementById("gretaRimsaite").style.paddingTop = "100vh";
    }
}

ilahaDadashova = getCookie("ilahaDadashova");
if (ilahaDadashova != "") {
    document.getElementById("ilahaDadashova").style.display = "block";
    document.getElementById("ilahaDadashova").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Ilaha Dadashova';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("ilahaDadashova").style.display = "none";
    document.getElementById("ilahaDadashova").style.paddingTop = "100vh";
    if (ilahaDadashova != "" && ilahaDadashova != null) {
        document.getElementById("ilahaDadashova").style.display = "none";
        document.getElementById("ilahaDadashova").style.paddingTop = "100vh";
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

nikitaSimovic = getCookie("nikitaSimovic");
if (nikitaSimovic != "") {
    document.getElementById("nikitaSimovic").style.display = "block";
    document.getElementById("nikitaSimovic").style.paddingTop = "0";
    document.getElementById("errorName").value = 'Nikita Simovič';
    setTimeout(() => {
        document.querySelector('#topInfoSimtadienis').scrollIntoView({
        behavior: 'smooth'});
    }, 500);
}
else {
    document.getElementById("nikitaSimovic").style.display = "none";
    document.getElementById("nikitaSimovic").style.paddingTop = "100vh";
    if (nikitaSimovic != "" && nikitaSimovic != null) {
        document.getElementById("nikitaSimovic").style.display = "none";
        document.getElementById("nikitaSimovic").style.paddingTop = "100vh";
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

if (svecias != "" || agotaKieraite != "" || aleksandraKravcionok != "" || armandasJakubauskas != "" || arturVelicko != "" || aruneBanuskeviciute != "" || augiusBacinskas != "" || berzunaSimaityte != "" || danieliusKurockin != "" || domasLenartavicius != "" || dominikaAndruskevic != "" || edvinMagazejev != "" || emilijaSergatiukaite != "" || gabrieleRagosko != "" || gretaRimsaite != "" || ilahaDadashova != "" || justinaCepaite != "" || kamileVaranauskaite != "" || lijanaRadkeviciute != "" || matasKasparavicius != "" || metaMelisaBukauskaite != "" || metaPanavaite != "" || neivydasPleskovas != "" || nikitaSimovic != "" || norbertasBorovskis != "" || rugileKaniusaite != "" || samantaKurec != "" || sauleBabaliauskaite != "" || simonaSmatauskaite != "" || smilteBazeviciute != "") {
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
    if (svecias != "" && svecias != null || agotaKieraite != "" && agotaKieraite != null || aleksandraKravcionok != "" && aleksandraKravcionok != null || armandasJakubauskas != "" && armandasJakubauskas != null || arturVelicko != "" && arturVelicko != null || aruneBanuskeviciute != "" && aruneBanuskeviciute != null || augiusBacinskas != "" && augiusBacinskas != null || berzunaSimaityte != "" && berzunaSimaityte != null || danieliusKurockin != "" && danieliusKurockin != null || domasLenartavicius != "" && domasLenartavicius != null || dominikaAndruskevic != "" && dominikaAndruskevic != null || edvinMagazejev != "" && edvinMagazejev != null || emilijaSergatiukaite != "" && emilijaSergatiukaite != null || gabrieleRagosko != "" && gabrieleRagosko != null || gretaRimsaite != "" && gretaRimsaite != null || ilahaDadashova != "" && ilahaDadashova != null || justinaCepaite != "" && justinaCepaite != null || kamileVaranauskaite != "" && kamileVaranauskaite != null || lijanaRadkeviciute != "" && lijanaRadkeviciute != null || matasKasparavicius != "" && matasKasparavicius != null || metaMelisaBukauskaite != "" && metaMelisaBukauskaite != null || metaPanavaite != "" && metaPanavaite != null || neivydasPleskovas != "" && neivydasPleskovas != null || nikitaSimovic != "" && nikitaSimovic != null || norbertasBorovskis != "" && norbertasBorovskis != null || rugileKaniusaite != "" && rugileKaniusaite != null || samantaKurec != "" && samantaKurec != null || sauleBabaliauskaite != "" && sauleBabaliauskaite != null || simonaSmatauskaite != "" && simonaSmatauskaite != null || smilteBazeviciute != "" && smilteBazeviciute != null) {
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
    document.cookie = "agotaKieraite=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "aleksandraKravcionok=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "armandasJakubauskas=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "arturVelicko=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "aruneBanuskeviciute=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "augiusBacinskas=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "berzunaSimaityte=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "danieliusKurockin=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "domasLenartavicius=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "dominikaAndruskevic=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "edvinMagazejev=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "emilijaSergatiukaite=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "gabrieleRagosko=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "gretaRimsaite=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "ilahaDadashova=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "justinaCepaite=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "kamileVaranauskaite=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "lijanaRadkeviciute=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "matasKasparavicius=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "metaMelisaBukauskaite=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "metaPanavaite=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "neivydasPleskovas=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "nikitaSimovic=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "norbertasBorovskis=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
    document.cookie = "rugileKaniusaite=; expires=Sat, 01 Jan 2000 00:00:00 UTC";
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
        document.getElementById("agotaKieraite").style.paddingTop = "100vh";
        document.getElementById("aleksandraKravcionok").style.paddingTop = "100vh";
        document.getElementById("armandasJakubauskas").style.paddingTop = "100vh";
        document.getElementById("arturVelicko").style.paddingTop = "100vh";
        document.getElementById("aruneBanuskeviciute").style.paddingTop = "100vh";
        document.getElementById("augiusBacinskas").style.paddingTop = "100vh";
        document.getElementById("berzunaSimaityte").style.paddingTop = "100vh";
        document.getElementById("danieliusKurockin").style.paddingTop = "100vh";
        document.getElementById("domasLenartavicius").style.paddingTop = "100vh";
        document.getElementById("dominikaAndruskevic").style.paddingTop = "100vh";
        document.getElementById("edvinMagazejev").style.paddingTop = "100vh";
        document.getElementById("emilijaSergatiukaite").style.paddingTop = "100vh";
        document.getElementById("gabrieleRagosko").style.paddingTop = "100vh";
        document.getElementById("gretaRimsaite").style.paddingTop = "100vh";
        document.getElementById("ilahaDadashova").style.paddingTop = "100vh";
        document.getElementById("justinaCepaite").style.paddingTop = "100vh";
        document.getElementById("kamileVaranauskaite").style.paddingTop = "100vh";
        document.getElementById("lijanaRadkeviciute").style.paddingTop = "100vh";
        document.getElementById("matasKasparavicius").style.paddingTop = "100vh";
        document.getElementById("metaMelisaBukauskaite").style.paddingTop = "100vh";
        document.getElementById("metaPanavaite").style.paddingTop = "100vh";
        document.getElementById("neivydasPleskovas").style.paddingTop = "100vh";
        document.getElementById("nikitaSimovic").style.paddingTop = "100vh";
        document.getElementById("norbertasBorovskis").style.paddingTop = "100vh";
        document.getElementById("rugileKaniusaite").style.paddingTop = "100vh";
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
        document.getElementById("agotaKieraite").style.display = "none";
        document.getElementById("aleksandraKravcionok").style.display = "none";
        document.getElementById("armandasJakubauskas").style.display = "none";
        document.getElementById("arturVelicko").style.display = "none";
        document.getElementById("aruneBanuskeviciute").style.display = "none";
        document.getElementById("augiusBacinskas").style.display = "none";
        document.getElementById("berzunaSimaityte").style.display = "none";
        document.getElementById("danieliusKurockin").style.display = "none";
        document.getElementById("domasLenartavicius").style.display = "none";
        document.getElementById("dominikaAndruskevic").style.display = "none";
        document.getElementById("edvinMagazejev").style.display = "none";
        document.getElementById("emilijaSergatiukaite").style.display = "none";
        document.getElementById("gabrieleRagosko").style.display = "none";
        document.getElementById("gretaRimsaite").style.display = "none";
        document.getElementById("ilahaDadashova").style.display = "none";
        document.getElementById("justinaCepaite").style.display = "none";
        document.getElementById("kamileVaranauskaite").style.display = "none";
        document.getElementById("lijanaRadkeviciute").style.display = "none";
        document.getElementById("matasKasparavicius").style.display = "none";
        document.getElementById("metaMelisaBukauskaite").style.display = "none";
        document.getElementById("metaPanavaite").style.display = "none";
        document.getElementById("neivydasPleskovas").style.display = "none";
        document.getElementById("nikitaSimovic").style.display = "none";
        document.getElementById("norbertasBorovskis").style.display = "none";
        document.getElementById("rugileKaniusaite").style.display = "none";
        document.getElementById("samantaKurec").style.display = "none";
        document.getElementById("sauleBabaliauskaite").style.display = "none";
        document.getElementById("simonaSmatauskaite").style.display = "none";
        document.getElementById("smilteBazeviciute").style.display = "none";
        document.getElementById("infoSimtadienis").style.display = "none";
    }, 310);
}