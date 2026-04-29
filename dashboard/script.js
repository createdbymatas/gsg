setTimeout(() => {
    document.getElementById("createdByMatas").style.opacity = "1";
}, 100);
setTimeout(() => {
    if(document.getElementById("raide14").style.opacity != "0"){
        document.getElementById("badConnection").style.right = "15px";
        document.getElementById("badConnectionI").style.animation = "connectionBlink 3s infinite";
    }
}, 10000);

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
        document.getElementById("noConnection").style.right = "-350px";
        document.getElementById("noConnectionI").style.animation = "none";
        document.getElementById("volumeMuted").style.top = "15px";
    }
    function offline(){
        setTimeout(() => {
            document.getElementById("noConnection").style.right = "15px";
            document.getElementById("noConnectionI").style.animation = "connectionBlink 3s infinite";
            document.getElementById("volumeMuted").style.top = "145px";
        }, 200);
    }

    setInterval(()=>{
        ajax();
    }, 100);

    function loaded(){
        setTimeout(() => {
            document.getElementById("raide14").style.opacity = "0";
            document.getElementById("badConnection").style.right = "-370px";
            document.getElementById("badConnectionI").style.animation = "none";
        }, 300);
        setTimeout(() => {
            document.getElementById("raide13").style.opacity = "0";
            document.getElementById("badConnection").style.right = "-370px";
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
        }, 1700);
        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
        }, 2000);
        hideNowPlaying();
    }
    
    loaded();
}

function fullScreen() {
    if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    document.getElementById('fullScreenBtnI').classList.remove("fa-expand");
    document.getElementById('fullScreenBtnI').classList.add("fa-compress");
  } else {
    document.exitFullscreen?.();
    document.getElementById('fullScreenBtnI').classList.add("fa-expand");
    document.getElementById('fullScreenBtnI').classList.remove("fa-compress");
  }
}
if (document.addEventListener)
{
    document.addEventListener('fullscreenchange', exitHandler, false);
    document.addEventListener('mozfullscreenchange', exitHandler, false);
    document.addEventListener('MSFullscreenChange', exitHandler, false);
    document.addEventListener('webkitfullscreenchange', exitHandler, false);
}
function exitHandler()
{
    if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement)
    {
        document.getElementById('fullScreenBtnI').classList.add("fa-expand");
        document.getElementById('fullScreenBtnI').classList.remove("fa-compress");
    }
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

document.body.onkeydown = function(e){
    if (e.keyCode === 32 && e.target === document.body) {
        e.preventDefault();
        playPause();
    }
    if (e.keyCode === 80) {
        playPause();
    }
    if (e.keyCode === 77) {
        pauseWithMute();
    }
    if (e.keyCode === 49) {
        maxSound();
    }
    if (e.keyCode === 86) {
        maxSound();
    }
    if (e.keyCode === 51) {
        backgroundSound();
    }
    if (e.keyCode === 66) {
        backgroundSound();
    }
    if (e.keyCode === 70) {
        fullScreen();
    }
}

function deny(){
    sound.pause();
    soundPlayPauseIcon.classList.remove("fa-pause");
    soundPlayPauseIcon.classList.add("fa-play");
    sound.currentTime = 0;
    document.getElementById("currentTrackName").innerText = 'neleidžiama';
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

document.getElementById("dashboard").onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.getElementById("dashboard").scrollTop > 1 || document.documentElement.scrollTop > 1) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.getElementById("dashboardNav").style.boxShadow = "0 0 10px #464646";
        }
        else{
            document.getElementById("dashboardNav").style.boxShadow = "0 0 10px lightgrey";
        }
    }
    else {
        document.getElementById("dashboardNav").style.boxShadow = "none";
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
    }, 10);
}

let progress = document.getElementById('playProgress');
let progressBg = document.getElementById('progressBg');
let sound = document.getElementById('sound');
let soundPlayPauseIcon = document.getElementById('soundPlayPauseIcon');

function playPause(){
    if(sound.src != ''){
        if(soundPlayPauseIcon.classList.contains("fa-pause")){
            sound.pause();
            soundPlayPauseIcon.classList.remove("fa-pause");
            soundPlayPauseIcon.classList.add("fa-play");
            document.getElementById("pauseWithMute").style.transform = "scale(0)";
        }
        else{
            sound.play();
            soundPlayPauseIcon.classList.add("fa-pause");
            soundPlayPauseIcon.classList.remove("fa-play");
            document.getElementById("pauseWithMute").style.transform = "scale(1)";
        }
    }
}
function pause(){
    if(sound.src != ''){
        sound.pause();
        soundPlayPauseIcon.classList.remove("fa-pause");
        soundPlayPauseIcon.classList.add("fa-play");
        document.getElementById("pauseWithMute").style.transform = "scale(0)";
    }
}

let intervalId;
function maxSound(){
    vol.value = 100;
    progressBarVol.value = vol.value;
    sound.volume = 1;
    changeVolumeIcon();
    mute();
    checkIfMuted()
}
function pauseWithMute(){
    if(sound.src != ''){
        intervalId ??= setInterval(lowerVolumeGradually, 10);
        document.getElementById('loadingAudio').style.display = "flex";
        document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    }
    checkIfMuted()
}
function lowerVolumeGradually(){
    vol.value = vol.value - 1;
    progressBarVol.value = vol.value;
    sound.volume = vol.value / 100;
    changeVolumeIcon();
    finishLoweringVolume();
    checkIfMuted()
}
function finishLoweringVolume(){
    if(vol.value == 0){
        clearInterval(intervalId);
        intervalId = null;
        pause();
        document.getElementById('loadingAudio').style.display = "none";
        mute();
        checkIfMuted()
    }
}
function backgroundSound(){
    intervalId ??= setInterval(changeVolumeGraduallyBg, 10);
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    checkIfMuted()
}
function changeVolumeGraduallyBg(){
    if(vol.value>30){
        vol.value = vol.value - 1;
        progressBarVol.value = vol.value;
        sound.volume = vol.value / 100;
        changeVolumeIcon();
        finishChangingVolumeBg();
        checkIfMuted()
    }
    else{
        vol.value = 30;
        progressBarVol.value = vol.value;
        sound.volume = vol.value / 100;
        changeVolumeIcon();
        finishChangingVolumeBg();
        checkIfMuted()
    }
}
function finishChangingVolumeBg(){
    if(vol.value == 30){
        clearInterval(intervalId);
        intervalId = null;
        document.getElementById('loadingAudio').style.display = "none";
        mute();
        checkIfMuted()
    }
}
function mute(){
    if(vol.value == 0){
        sound.muted = true;
    }
    else{
        sound.muted = false;
    }
}

sound.onended = function() {
    soundPlayPauseIcon.classList.remove("fa-pause");
    soundPlayPauseIcon.classList.add("fa-play");
    document.getElementById("pauseWithMute").style.transform = "scale(0)";
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

let vol = document.getElementById('vol');
progressBarVol = document.getElementById('volume-progress');
vol.oninput = function() {
    progressBarVol.value = vol.value;
    sound.volume = vol.value / 100;
    changeVolumeIcon();
    mute();
    checkIfMuted()
}
progressBarVol.addEventListener("click", (e)=>{
    let progressWidthval = progressBarVol.clientWidth;
    let clickedOffSetX = e.offsetX;

    vol.value = (clickedOffSetX / progressWidthval) * 100;
    progressBarVol.value = vol.value;
    sound.volume = vol.value / 100;
    changeVolumeIcon();
    mute();
    checkIfMuted();
});
function changeVolumeIcon(){
    if(vol.value>=40){
        document.getElementById('volumeIcon').classList.add("fa-volume-high");
        document.getElementById('volumeIcon').classList.remove("fa-volume-low");
        document.getElementById('volumeIcon').classList.remove("fa-volume-off");
        document.getElementById('volumeIcon').classList.remove("fa-volume-xmark");
    }
    else if(vol.value>=20){
        document.getElementById('volumeIcon').classList.remove("fa-volume-high");
        document.getElementById('volumeIcon').classList.add("fa-volume-low");
        document.getElementById('volumeIcon').classList.remove("fa-volume-off");
        document.getElementById('volumeIcon').classList.remove("fa-volume-xmark");
    }
    else if(vol.value>0){
        document.getElementById('volumeIcon').classList.remove("fa-volume-high");
        document.getElementById('volumeIcon').classList.remove("fa-volume-low");
        document.getElementById('volumeIcon').classList.add("fa-volume-off");
        document.getElementById('volumeIcon').classList.remove("fa-volume-xmark");
    }
    else if(vol.value==0){
        document.getElementById('volumeIcon').classList.remove("fa-volume-high");
        document.getElementById('volumeIcon').classList.remove("fa-volume-low");
        document.getElementById('volumeIcon').classList.remove("fa-volume-off");
        document.getElementById('volumeIcon').classList.add("fa-volume-xmark");
    }
}
function checkIfMuted(){
    if(sound.volume == 0){
        document.getElementById('volumeMuted').style.right = "15px";
    }
    else{
        document.getElementById('volumeMuted').style.right = "-300px";
    }
}
function hideVolumeMuted(){
    document.getElementById('volumeMuted').style.right = "-300px";
}

function playSoundSokis(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    hideNowPlaying();
    sound.src = 'sounds/sokis.mp3';
    sound.currentTime = 0;
    sound.play();
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("currentTrackName").innerText = 'Šokis';
    document.getElementById("soundDuration").innerText = '3:23';
    document.getElementById("pauseWithMute").style.transform = "scale(0)";
    document.getElementById("progressBg").style.pointerEvents = "all";
    document.getElementById("nowPlayingSokis").style.display = "inline";
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
            document.getElementById("pauseWithMute").style.transform = "scale(1)";
        }, 300);
    });
}
function playSoundJura(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    hideNowPlaying();
    sound.src = 'sounds/jura.mp3';
    sound.currentTime = 0;
    sound.play();
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("currentTrackName").innerText = 'Jūra';
    document.getElementById("soundDuration").innerText = '6:36';
    document.getElementById("pauseWithMute").style.transform = "scale(0)";
    document.getElementById("progressBg").style.pointerEvents = "all";
    document.getElementById("nowPlayingJura").style.display = "inline";
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
            document.getElementById("pauseWithMute").style.transform = "scale(1)";
        }, 300);
    });
}

function hideNowPlaying(){
    document.getElementById('nowPlayingSokis').style.display = "none";
    document.getElementById('nowPlayingJura').style.display = "none";
}

function openScript() {
    document.getElementById("scenarijus").style.bottom = "0";
    document.getElementById("dashboard").style.width = "70%";
    document.getElementById("scriptBtn").style.opacity = "0";
    document.getElementById("scriptBtn").style.pointerEvents = "none";
    document.getElementById("barBelowNav").style.width = "70%";
    document.getElementById("soundPlayer").style.width = "70%";
    document.getElementById("playingTrackName").style.width = "18%";
    document.getElementById("instructionsBtn").style.opacity = "0";
    document.getElementById("instructionsBtn").style.pointerEvents = "none";
}
function closeScript() {
    document.getElementById("scenarijus").style.bottom = "-100%";
    document.getElementById("dashboard").style.width = "100%";
    document.getElementById("scriptBtn").style.opacity = "1";
    document.getElementById("scriptBtn").style.pointerEvents = "all";
    document.getElementById("barBelowNav").style.width = "100%";
    document.getElementById("soundPlayer").style.width = "100%";
    document.getElementById("playingTrackName").style.width = "20%";
    document.getElementById("instructionsBtn").style.opacity = "1";
    document.getElementById("instructionsBtn").style.pointerEvents = "all";
}

function openInstructions() {
    document.getElementById("instrukcijos").style.bottom = "0";
    document.getElementById("dashboard").style.width = "70%";
    document.getElementById("scriptBtn").style.opacity = "0";
    document.getElementById("scriptBtn").style.pointerEvents = "none";
    document.getElementById("barBelowNav").style.width = "70%";
    document.getElementById("soundPlayer").style.width = "70%";
    document.getElementById("playingTrackName").style.width = "18%";
    document.getElementById("instructionsBtn").style.opacity = "0";
    document.getElementById("instructionsBtn").style.pointerEvents = "none";
}
function closeInstructions() {
    document.getElementById("instrukcijos").style.bottom = "-100%";
    document.getElementById("dashboard").style.width = "100%";
    document.getElementById("scriptBtn").style.opacity = "1";
    document.getElementById("scriptBtn").style.pointerEvents = "all";
    document.getElementById("barBelowNav").style.width = "100%";
    document.getElementById("soundPlayer").style.width = "100%";
    document.getElementById("playingTrackName").style.width = "20%";
    document.getElementById("instructionsBtn").style.opacity = "1";
    document.getElementById("instructionsBtn").style.pointerEvents = "all";
}

function openLyrics() {
    document.getElementById("lyrics").style.display = "flex";
    setTimeout(() => {
        document.getElementById("lyrics").style.bottom = "0";
    }, 10);
}
function closeLyrics() {
    document.getElementById("lyrics").style.bottom = "-100%";
    setTimeout(() => {
        document.getElementById("lyrics").style.display = "none";
    }, 200);
}