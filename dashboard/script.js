setTimeout(() => {
    document.getElementById("createdByMatas").style.opacity = "1";
}, 100);
setTimeout(() => {
    if(document.getElementById("raide14").style.opacity != "0"){
        document.getElementById("badConnectionBg").style.bottom = "25px";
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

    setInterval(()=>{
        if(sound.volume == 0){
            document.getElementById('volumeMutedBg').style.bottom = "110px";
        }
        else{
            document.getElementById('volumeMutedBg').style.bottom = "-50%";
        }
    }, 100);

    function loaded(){
        setTimeout(() => {
            document.getElementById("raide14").style.opacity = "0";
            document.getElementById("badConnectionBg").style.bottom = "-50%";
            document.getElementById("badConnectionI").style.animation = "none";
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
    if (e.keyCode === 77) {
        pauseWithMute();
    }
    if (e.keyCode === 49) {
        maxSound();
    }
    if (e.keyCode === 51) {
        backgroundSound();
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

let intervalId;
function maxSound(){
    vol.value = 100;
    progressBarVol.value = vol.value;
    sound.volume = 1;
    changeVolumeIcon();
    mute();
}
function pauseWithMute(){
    if(sound.src != ''){
        intervalId ??= setInterval(lowerVolumeGradually, 10);
        document.getElementById('loadingAudio').style.display = "flex";
        document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    }
}
function lowerVolumeGradually(){
    vol.value = vol.value - 1;
    progressBarVol.value = vol.value;
    sound.volume = vol.value / 100;
    changeVolumeIcon();
    finishLoweringVolume();
}
function finishLoweringVolume(){
    if(vol.value == 0){
        clearInterval(intervalId);
        intervalId = null;
        playPause();
        document.getElementById('loadingAudio').style.display = "none";
        mute();
    }
}
function backgroundSound(){
    intervalId ??= setInterval(changeVolumeGraduallyBg, 10);
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
}
function changeVolumeGraduallyBg(){
    if(vol.value>30){
        vol.value = vol.value - 1;
        progressBarVol.value = vol.value;
        sound.volume = vol.value / 100;
        changeVolumeIcon();
        finishChangingVolumeBg();
    }
    else{
        vol.value = 30;
        progressBarVol.value = vol.value;
        sound.volume = vol.value / 100;
        changeVolumeIcon();
        finishChangingVolumeBg();
    }
}
function finishChangingVolumeBg(){
    if(vol.value == 30){
        clearInterval(intervalId);
        intervalId = null;
        document.getElementById('loadingAudio').style.display = "none";
        mute();
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

    if(document.getElementById("currentTrackName").innerText == 'Daina'){
        if(musicCurrentTime.innerText == "0:00"){
            document.getElementById('l0').innerHTML = '29...';
        }
        else if(musicCurrentTime.innerText == "0:01"){
            document.getElementById('l0').innerHTML = '28...';
        }
        else if(musicCurrentTime.innerText == "0:02"){
            document.getElementById('l0').innerHTML = '27...';
        }
        else if(musicCurrentTime.innerText == "0:03"){
            document.getElementById('l0').innerHTML = '26...';
        }
        else if(musicCurrentTime.innerText == "0:04"){
            document.getElementById('l0').innerHTML = '25...';
        }
        else if(musicCurrentTime.innerText == "0:05"){
            document.getElementById('l0').innerHTML = '24...';
        }
        else if(musicCurrentTime.innerText == "0:06"){
            document.getElementById('l0').innerHTML = '23...';
        }
        else if(musicCurrentTime.innerText == "0:07"){
            document.getElementById('l0').innerHTML = '22...';
        }
        else if(musicCurrentTime.innerText == "0:08"){
            document.getElementById('l0').innerHTML = '21...';
        }
        else if(musicCurrentTime.innerText == "0:09"){
            document.getElementById('l0').innerHTML = '20...';
        }
        else if(musicCurrentTime.innerText == "0:10"){
            document.getElementById('l0').innerHTML = '19...';
        }
        else if(musicCurrentTime.innerText == "0:11"){
            document.getElementById('l0').innerHTML = '18...';
        }
        else if(musicCurrentTime.innerText == "0:12"){
            document.getElementById('l0').innerHTML = '17...';
        }
        else if(musicCurrentTime.innerText == "0:13"){
            document.getElementById('l0').innerHTML = '16...';
        }
        else if(musicCurrentTime.innerText == "0:14"){
            document.getElementById('l0').innerHTML = '15...';
        }
        else if(musicCurrentTime.innerText == "0:15"){
            document.getElementById('l0').innerHTML = '14...';
        }
        else if(musicCurrentTime.innerText == "0:16"){
            document.getElementById('l0').innerHTML = '13...';
        }
        else if(musicCurrentTime.innerText == "0:17"){
            document.getElementById('l0').innerHTML = '12...';
        }
        else if(musicCurrentTime.innerText == "0:18"){
            document.getElementById('l0').innerHTML = '11...';
        }
        else if(musicCurrentTime.innerText == "0:19"){
            document.getElementById('l0').innerHTML = '10...';
        }
        else if(musicCurrentTime.innerText == "0:20"){
            document.getElementById('l0').innerHTML = '9...';
        }
        else if(musicCurrentTime.innerText == "0:21"){
            document.getElementById('l0').innerHTML = '8...';
        }
        else if(musicCurrentTime.innerText == "0:22"){
            document.getElementById('l0').innerHTML = '7...';
        }
        else if(musicCurrentTime.innerText == "0:23"){
            document.getElementById('l0').innerHTML = '6...';
        }
        else if(musicCurrentTime.innerText == "0:24"){
            document.getElementById('l0').innerHTML = '5...';
        }
        else if(musicCurrentTime.innerText == "0:25"){
            document.getElementById('l0').innerHTML = '4...';
        }
        else if(musicCurrentTime.innerText == "0:26"){
            document.getElementById('l0').innerHTML = '3...';
            document.getElementById('l0').style.color = 'red';
        }
        else if(musicCurrentTime.innerText == "0:27"){
            document.getElementById('l0').innerHTML = '2...';
        }
        else if(musicCurrentTime.innerText == "0:28"){
            document.getElementById('l0').innerHTML = '1...';
        }
        else if(musicCurrentTime.innerText == "0:29"){
            document.getElementById('l0').innerHTML = '   ';
            document.getElementById('l0').style.marginTop = '-25%';
            document.getElementById('l0').style.transform = 'scale(1)';
            document.getElementById('l0').style.fontWeight = '400';
            document.getElementById('l1').style.marginTop = '0';
            document.getElementById('l1').style.transform = 'scale(1.8)';
            document.getElementById('l1').style.fontWeight = '600';
            document.getElementById('l2').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "0:33"){
            document.getElementById('l0').style.marginTop = '-100%';
            document.getElementById('l1').style.marginTop = '-25%';
            document.getElementById('l1').style.transform = 'scale(1)';
            document.getElementById('l1').style.fontWeight = '400';
            document.getElementById('l2').style.marginTop = '0';
            document.getElementById('l2').style.transform = 'scale(1.8)';
            document.getElementById('l2').style.fontWeight = '600';
            document.getElementById('l3').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "0:37"){
            document.getElementById('l1').style.marginTop = '-100%';
            document.getElementById('l2').style.marginTop = '-25%';
            document.getElementById('l2').style.transform = 'scale(1)';
            document.getElementById('l2').style.fontWeight = '400';
            document.getElementById('l3').style.marginTop = '0';
            document.getElementById('l3').style.transform = 'scale(1.8)';
            document.getElementById('l3').style.fontWeight = '600';
            document.getElementById('l4').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "0:40"){
            document.getElementById('l2').style.marginTop = '-100%';
            document.getElementById('l3').style.marginTop = '-25%';
            document.getElementById('l3').style.transform = 'scale(1)';
            document.getElementById('l3').style.fontWeight = '400';
            document.getElementById('l4').style.marginTop = '0';
            document.getElementById('l4').style.transform = 'scale(1.8)';
            document.getElementById('l4').style.fontWeight = '600';
            document.getElementById('l5').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "0:44"){
            document.getElementById('l3').style.marginTop = '-100%';
            document.getElementById('l4').style.marginTop = '-25%';
            document.getElementById('l4').style.transform = 'scale(1)';
            document.getElementById('l4').style.fontWeight = '400';
            document.getElementById('l5').style.marginTop = '0';
            document.getElementById('l5').style.transform = 'scale(1.8)';
            document.getElementById('l5').style.fontWeight = '600';
            document.getElementById('l6').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "0:48"){
            document.getElementById('l4').style.marginTop = '-100%';
            document.getElementById('l5').style.marginTop = '-25%';
            document.getElementById('l5').style.transform = 'scale(1)';
            document.getElementById('l5').style.fontWeight = '400';
            document.getElementById('l6').style.marginTop = '0';
            document.getElementById('l6').style.transform = 'scale(1.8)';
            document.getElementById('l6').style.fontWeight = '600';
            document.getElementById('l7').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "0:51"){
            document.getElementById('l5').style.marginTop = '-100%';
            document.getElementById('l6').style.marginTop = '-25%';
            document.getElementById('l6').style.transform = 'scale(1)';
            document.getElementById('l6').style.fontWeight = '400';
            document.getElementById('l7').style.marginTop = '0';
            document.getElementById('l7').style.transform = 'scale(1.8)';
            document.getElementById('l7').style.fontWeight = '600';
            document.getElementById('l8').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "0:55"){
            document.getElementById('l6').style.marginTop = '-100%';
            document.getElementById('l7').style.marginTop = '-25%';
            document.getElementById('l7').style.transform = 'scale(1)';
            document.getElementById('l7').style.fontWeight = '400';
            document.getElementById('l8').style.marginTop = '0';
            document.getElementById('l8').style.transform = 'scale(1.8)';
            document.getElementById('l8').style.fontWeight = '600';
            document.getElementById('l9').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "0:58"){
            document.getElementById('l7').style.marginTop = '-100%';
            document.getElementById('l8').style.marginTop = '-25%';
            document.getElementById('l8').style.transform = 'scale(1)';
            document.getElementById('l8').style.fontWeight = '400';
            document.getElementById('l9').style.marginTop = '0';
            document.getElementById('l9').style.transform = 'scale(1.8)';
            document.getElementById('l9').style.fontWeight = '600';
            document.getElementById('l9').innerHTML = '4...';
            document.getElementById('l9').style.color = 'red';
            document.getElementById('l10').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "0:59"){
            document.getElementById('l9').innerHTML = '3...';
        }
        else if(musicCurrentTime.innerText == "1:00"){
            document.getElementById('l9').innerHTML = '2...';
        }
        else if(musicCurrentTime.innerText == "1:01"){
            document.getElementById('l9').innerHTML = '1...';
        }
        else if(musicCurrentTime.innerText == "1:02"){
            document.getElementById('l8').style.marginTop = '-100%';
            document.getElementById('l9').style.marginTop = '-25%';
            document.getElementById('l9').style.transform = 'scale(1)';
            document.getElementById('l9').style.fontWeight = '400';
            document.getElementById('l9').innerHTML = '   ';
            document.getElementById('l10').style.marginTop = '0';
            document.getElementById('l10').style.transform = 'scale(1.8)';
            document.getElementById('l10').style.fontWeight = '600';
            document.getElementById('l11').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "1:06"){
            document.getElementById('l9').style.marginTop = '-100%';
            document.getElementById('l10').style.marginTop = '-25%';
            document.getElementById('l10').style.transform = 'scale(1)';
            document.getElementById('l10').style.fontWeight = '400';
            document.getElementById('l11').style.marginTop = '0';
            document.getElementById('l11').style.transform = 'scale(1.8)';
            document.getElementById('l11').style.fontWeight = '600';
            document.getElementById('l12').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "1:09"){
            document.getElementById('l10').style.marginTop = '-100%';
            document.getElementById('l11').style.marginTop = '-25%';
            document.getElementById('l11').style.transform = 'scale(1)';
            document.getElementById('l11').style.fontWeight = '400';
            document.getElementById('l12').style.marginTop = '0';
            document.getElementById('l12').style.transform = 'scale(1.8)';
            document.getElementById('l12').style.fontWeight = '600';
            document.getElementById('l13').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "1:13"){
            document.getElementById('l11').style.marginTop = '-100%';
            document.getElementById('l12').style.marginTop = '-25%';
            document.getElementById('l12').style.transform = 'scale(1)';
            document.getElementById('l12').style.fontWeight = '400';
            document.getElementById('l13').style.marginTop = '0';
            document.getElementById('l13').style.transform = 'scale(1.8)';
            document.getElementById('l13').style.fontWeight = '600';
            document.getElementById('l14').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "1:17"){
            document.getElementById('l12').style.marginTop = '-100%';
            document.getElementById('l13').style.marginTop = '-25%';
            document.getElementById('l13').style.transform = 'scale(1)';
            document.getElementById('l13').style.fontWeight = '400';
            document.getElementById('l14').style.marginTop = '0';
            document.getElementById('l14').style.transform = 'scale(1.8)';
            document.getElementById('l14').style.fontWeight = '600';
            document.getElementById('l15').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "1:21"){
            document.getElementById('l13').style.marginTop = '-100%';
            document.getElementById('l14').style.marginTop = '-25%';
            document.getElementById('l14').style.transform = 'scale(1)';
            document.getElementById('l14').style.fontWeight = '400';
            document.getElementById('l15').style.marginTop = '0';
            document.getElementById('l15').style.transform = 'scale(1.8)';
            document.getElementById('l15').style.fontWeight = '600';
            document.getElementById('l16').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "1:24"){
            document.getElementById('l14').style.marginTop = '-100%';
            document.getElementById('l15').style.marginTop = '-25%';
            document.getElementById('l15').style.transform = 'scale(1)';
            document.getElementById('l15').style.fontWeight = '400';
            document.getElementById('l16').style.marginTop = '0';
            document.getElementById('l16').style.transform = 'scale(1.8)';
            document.getElementById('l16').style.fontWeight = '600';
            document.getElementById('l17').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "1:28"){
            document.getElementById('l15').style.marginTop = '-100%';
            document.getElementById('l16').style.marginTop = '-25%';
            document.getElementById('l16').style.transform = 'scale(1)';
            document.getElementById('l16').style.fontWeight = '400';
            document.getElementById('l17').style.marginTop = '0';
            document.getElementById('l17').style.transform = 'scale(1.8)';
            document.getElementById('l17').style.fontWeight = '600';
            document.getElementById('l18').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "1:31"){
            document.getElementById('l16').style.marginTop = '-100%';
            document.getElementById('l17').style.marginTop = '-25%';
            document.getElementById('l17').style.transform = 'scale(1)';
            document.getElementById('l17').style.fontWeight = '400';
            document.getElementById('l18').style.marginTop = '0';
            document.getElementById('l18').style.transform = 'scale(1.8)';
            document.getElementById('l18').style.fontWeight = '600';
            document.getElementById('l18').innerHTML = '30...';
            document.getElementById('l19').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "1:32"){
            document.getElementById('l18').innerHTML = '29...';
        }
        else if(musicCurrentTime.innerText == "1:33"){
            document.getElementById('l18').innerHTML = '28...';
        }
        else if(musicCurrentTime.innerText == "1:34"){
            document.getElementById('l18').innerHTML = '27...';
        }
        else if(musicCurrentTime.innerText == "1:35"){
            document.getElementById('l18').innerHTML = '26...';
        }
        else if(musicCurrentTime.innerText == "1:36"){
            document.getElementById('l18').innerHTML = '25...';
        }
        else if(musicCurrentTime.innerText == "1:37"){
            document.getElementById('l18').innerHTML = '24...';
        }
        else if(musicCurrentTime.innerText == "1:38"){
            document.getElementById('l18').innerHTML = '23...';
        }
        else if(musicCurrentTime.innerText == "1:39"){
            document.getElementById('l18').innerHTML = '22...';
        }
        else if(musicCurrentTime.innerText == "1:40"){
            document.getElementById('l18').innerHTML = '21...';
        }
        else if(musicCurrentTime.innerText == "1:41"){
            document.getElementById('l18').innerHTML = '20...';
        }
        else if(musicCurrentTime.innerText == "1:42"){
            document.getElementById('l18').innerHTML = '19...';
        }
        else if(musicCurrentTime.innerText == "1:43"){
            document.getElementById('l18').innerHTML = '18...';
        }
        else if(musicCurrentTime.innerText == "1:44"){
            document.getElementById('l18').innerHTML = '17...';
        }
        else if(musicCurrentTime.innerText == "1:45"){
            document.getElementById('l18').innerHTML = '16...';
        }
        else if(musicCurrentTime.innerText == "1:46"){
            document.getElementById('l18').innerHTML = '15...';
        }
        else if(musicCurrentTime.innerText == "1:47"){
            document.getElementById('l18').innerHTML = '14...';
        }
        else if(musicCurrentTime.innerText == "1:48"){
            document.getElementById('l18').innerHTML = '13...';
        }
        else if(musicCurrentTime.innerText == "1:49"){
            document.getElementById('l18').innerHTML = '12...';
        }
        else if(musicCurrentTime.innerText == "1:50"){
            document.getElementById('l18').innerHTML = '11...';
        }
        else if(musicCurrentTime.innerText == "1:51"){
            document.getElementById('l18').innerHTML = '10...';
        }
        else if(musicCurrentTime.innerText == "1:52"){
            document.getElementById('l18').innerHTML = '9...';
        }
        else if(musicCurrentTime.innerText == "1:53"){
            document.getElementById('l18').innerHTML = '8...';
        }
        else if(musicCurrentTime.innerText == "1:54"){
            document.getElementById('l18').innerHTML = '7...';
        }
        else if(musicCurrentTime.innerText == "1:55"){
            document.getElementById('l18').innerHTML = '6...';
        }
        else if(musicCurrentTime.innerText == "1:56"){
            document.getElementById('l18').innerHTML = '5...';
        }
        else if(musicCurrentTime.innerText == "1:57"){
            document.getElementById('l18').innerHTML = '4...';
        }
        else if(musicCurrentTime.innerText == "1:58"){
            document.getElementById('l18').innerHTML = '3...';
            document.getElementById('l18').style.color = 'red';
        }
        else if(musicCurrentTime.innerText == "1:59"){
            document.getElementById('l18').innerHTML = '2...';
        }
        else if(musicCurrentTime.innerText == "2:00"){
            document.getElementById('l18').innerHTML = '1...';
        }
        else if(musicCurrentTime.innerText == "2:01"){
            document.getElementById('l17').style.marginTop = '-100%';
            document.getElementById('l18').style.marginTop = '-25%';
            document.getElementById('l18').style.transform = 'scale(1)';
            document.getElementById('l18').style.fontWeight = '400';
            document.getElementById('l18').innerHTML = '   ';
            document.getElementById('l19').style.marginTop = '0';
            document.getElementById('l19').style.transform = 'scale(1.8)';
            document.getElementById('l19').style.fontWeight = '600';
            document.getElementById('l20').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "2:04"){
            document.getElementById('l18').style.marginTop = '-100%';
            document.getElementById('l19').style.marginTop = '-25%';
            document.getElementById('l19').style.transform = 'scale(1)';
            document.getElementById('l19').style.fontWeight = '400';
            document.getElementById('l20').style.marginTop = '0';
            document.getElementById('l20').style.transform = 'scale(1.8)';
            document.getElementById('l20').style.fontWeight = '600';
            document.getElementById('l21').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "2:08"){
            document.getElementById('l19').style.marginTop = '-100%';
            document.getElementById('l20').style.marginTop = '-25%';
            document.getElementById('l20').style.transform = 'scale(1)';
            document.getElementById('l20').style.fontWeight = '400';
            document.getElementById('l21').style.marginTop = '0';
            document.getElementById('l21').style.transform = 'scale(1.8)';
            document.getElementById('l21').style.fontWeight = '600';
            document.getElementById('l22').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "2:12"){
            document.getElementById('l20').style.marginTop = '-100%';
            document.getElementById('l21').style.marginTop = '-25%';
            document.getElementById('l21').style.transform = 'scale(1)';
            document.getElementById('l21').style.fontWeight = '400';
            document.getElementById('l22').style.marginTop = '0';
            document.getElementById('l22').style.transform = 'scale(1.8)';
            document.getElementById('l22').style.fontWeight = '600';
            document.getElementById('l23').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "2:16"){
            document.getElementById('l21').style.marginTop = '-100%';
            document.getElementById('l22').style.marginTop = '-25%';
            document.getElementById('l22').style.transform = 'scale(1)';
            document.getElementById('l22').style.fontWeight = '400';
            document.getElementById('l23').style.marginTop = '0';
            document.getElementById('l23').style.transform = 'scale(1.8)';
            document.getElementById('l23').style.fontWeight = '600';
            document.getElementById('l24').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "2:20"){
            document.getElementById('l22').style.marginTop = '-100%';
            document.getElementById('l23').style.marginTop = '-25%';
            document.getElementById('l23').style.transform = 'scale(1)';
            document.getElementById('l23').style.fontWeight = '400';
            document.getElementById('l24').style.marginTop = '0';
            document.getElementById('l24').style.transform = 'scale(1.8)';
            document.getElementById('l24').style.fontWeight = '600';
            document.getElementById('l25').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "2:23"){
            document.getElementById('l23').style.marginTop = '-100%';
            document.getElementById('l24').style.marginTop = '-25%';
            document.getElementById('l24').style.transform = 'scale(1)';
            document.getElementById('l24').style.fontWeight = '400';
            document.getElementById('l25').style.marginTop = '0';
            document.getElementById('l25').style.transform = 'scale(1.8)';
            document.getElementById('l25').style.fontWeight = '600';
            document.getElementById('l26').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "2:27"){
            document.getElementById('l24').style.marginTop = '-100%';
            document.getElementById('l25').style.marginTop = '-25%';
            document.getElementById('l25').style.transform = 'scale(1)';
            document.getElementById('l25').style.fontWeight = '400';
            document.getElementById('l26').style.marginTop = '0';
            document.getElementById('l26').style.transform = 'scale(1.8)';
            document.getElementById('l26').style.fontWeight = '600';
            document.getElementById('l27').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "2:30"){
            document.getElementById('l25').style.marginTop = '-100%';
            document.getElementById('l26').style.marginTop = '-25%';
            document.getElementById('l26').style.transform = 'scale(1)';
            document.getElementById('l26').style.fontWeight = '400';
            document.getElementById('l27').style.marginTop = '0';
            document.getElementById('l27').style.transform = 'scale(1.8)';
            document.getElementById('l27').style.fontWeight = '600';
            document.getElementById('l28').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "2:34"){
            document.getElementById('l26').style.marginTop = '-100%';
            document.getElementById('l27').style.marginTop = '-25%';
            document.getElementById('l27').style.transform = 'scale(1)';
            document.getElementById('l27').style.fontWeight = '400';
            document.getElementById('l28').style.marginTop = '0';
            document.getElementById('l28').style.transform = 'scale(1.8)';
            document.getElementById('l28').style.fontWeight = '600';
            document.getElementById('l29').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "2:37"){
            document.getElementById('l27').style.marginTop = '-100%';
            document.getElementById('l28').style.marginTop = '-25%';
            document.getElementById('l28').style.transform = 'scale(1)';
            document.getElementById('l28').style.fontWeight = '400';
            document.getElementById('l29').style.marginTop = '0';
            document.getElementById('l29').style.transform = 'scale(1.8)';
            document.getElementById('l29').style.fontWeight = '600';
            document.getElementById('l30').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "2:41"){
            document.getElementById('l28').style.marginTop = '-100%';
            document.getElementById('l29').style.marginTop = '-25%';
            document.getElementById('l29').style.transform = 'scale(1)';
            document.getElementById('l29').style.fontWeight = '400';
            document.getElementById('l30').style.marginTop = '0';
            document.getElementById('l30').style.transform = 'scale(1.8)';
            document.getElementById('l30').style.fontWeight = '600';
            document.getElementById('l31').style.marginTop = '25%';
        }
        else if(musicCurrentTime.innerText == "2:44"){
            document.getElementById('l29').style.marginTop = '-100%';
            document.getElementById('l30').style.marginTop = '-25%';
            document.getElementById('l30').style.transform = 'scale(1)';
            document.getElementById('l30').style.fontWeight = '400';
            document.getElementById('l31').style.marginTop = '0';
            document.getElementById('l31').style.transform = 'scale(1.8)';
            document.getElementById('l31').style.fontWeight = '600';
            document.getElementById('l32').style.marginTop = '25%';
        }
    }
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
}
progressBarVol.addEventListener("click", (e)=>{
    let progressWidthval = progressBarVol.clientWidth;
    let clickedOffSetX = e.offsetX;

    vol.value = (clickedOffSetX / progressWidthval) * 100;
    progressBarVol.value = vol.value;
    sound.volume = vol.value / 100;
    changeVolumeIcon();
    mute();
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

function playSoundZiniuPradzia(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/ziniu-pradzia.mp3';
    sound.currentTime = 0;
    sound.play();
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("currentTrackName").innerText = 'Žinių pradžia';
    document.getElementById("soundDuration").innerText = '0:14';
    document.getElementById("pauseWithMute").style.transform = "scale(0)";
    document.getElementById("progressBg").style.pointerEvents = "all";
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
            document.getElementById("pauseWithMute").style.transform = "scale(1)";
        }, 300);
    });
}
function playSoundZiniuPabaiga(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/ziniu-pabaiga.mp3';
    sound.currentTime = 0;
    sound.play();
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("currentTrackName").innerText = 'Žinių pabaiga';
    document.getElementById("soundDuration").innerText = '0:07';
    document.getElementById("pauseWithMute").style.transform = "scale(0)";
    document.getElementById("progressBg").style.pointerEvents = "all";
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
            document.getElementById("pauseWithMute").style.transform = "scale(1)";
        }, 300);
    });
}
function playSoundFarai(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/farai.mp3';
    sound.currentTime = 0;
    sound.play();
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("currentTrackName").innerText = 'Farai';
    document.getElementById("soundDuration").innerText = '0:17';
    document.getElementById("pauseWithMute").style.transform = "scale(0)";
    document.getElementById("progressBg").style.pointerEvents = "all";
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
            document.getElementById("pauseWithMute").style.transform = "scale(1)";
        }, 300);
    });
}
function playSoundFaruSokis(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/faru-sokis.mp3';
    sound.currentTime = 0;
    sound.play();
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("currentTrackName").innerText = 'Farų šokis';
    document.getElementById("soundDuration").innerText = '1:25';
    document.getElementById("pauseWithMute").style.transform = "scale(0)";
    document.getElementById("progressBg").style.pointerEvents = "all";
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
            document.getElementById("pauseWithMute").style.transform = "scale(1)";
        }, 300);
    });
}
function playSoundAuksinisProtas(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/auksinis-protas.mp3';
    sound.currentTime = 0;
    sound.play();
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("currentTrackName").innerText = 'Auksinis protas';
    document.getElementById("soundDuration").innerText = '0:19';
    document.getElementById("pauseWithMute").style.transform = "scale(0)";
    document.getElementById("progressBg").style.pointerEvents = "all";
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
            document.getElementById("pauseWithMute").style.transform = "scale(1)";
        }, 300);
    });
}
function playSoundLietuvosTalentai(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/lietuvos-talentai.mp3';
    sound.currentTime = 0;
    sound.play();
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("currentTrackName").innerText = 'Lietuvos talentai';
    document.getElementById("soundDuration").innerText = '0:24';
    document.getElementById("pauseWithMute").style.transform = "scale(0)";
    document.getElementById("progressBg").style.pointerEvents = "all";
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
            document.getElementById("pauseWithMute").style.transform = "scale(1)";
        }, 300);
    });
}
function playSoundMerginuSokis(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/merginu-sokis.mp3';
    sound.currentTime = 0;
    sound.play();
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("currentTrackName").innerText = 'Merginų šokis';
    document.getElementById("soundDuration").innerText = '1:40';
    document.getElementById("pauseWithMute").style.transform = "scale(0)";
    document.getElementById("progressBg").style.pointerEvents = "all";
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
            document.getElementById("pauseWithMute").style.transform = "scale(1)";
        }, 300);
    });
}
function playSoundParodijuSokis(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/parodiju-sokis.mp3';
    sound.currentTime = 0;
    sound.play();
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("currentTrackName").innerText = 'Parodijų šokis';
    document.getElementById("soundDuration").innerText = '2:19';
    document.getElementById("pauseWithMute").style.transform = "scale(0)";
    document.getElementById("progressBg").style.pointerEvents = "all";
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
            document.getElementById("pauseWithMute").style.transform = "scale(1)";
        }, 300);
    });
}
function playSoundGangnamStyle(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/gangnam-style.mp3';
    sound.currentTime = 0;
    sound.play();
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("currentTrackName").innerText = 'Gangnam style';
    document.getElementById("soundDuration").innerText = '4:08';
    document.getElementById("pauseWithMute").style.transform = "scale(0)";
    document.getElementById("progressBg").style.pointerEvents = "all";
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
            document.getElementById("pauseWithMute").style.transform = "scale(1)";
        }, 300);
    });
}
function playSoundBeatosVirtuve(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/beatos-virtuve.mp3';
    sound.currentTime = 0;
    sound.play();
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("currentTrackName").innerText = 'Beatos virtuvė';
    document.getElementById("soundDuration").innerText = '12:23';
    document.getElementById("pauseWithMute").style.transform = "scale(0)";
    document.getElementById("progressBg").style.pointerEvents = "all";
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
            document.getElementById("pauseWithMute").style.transform = "scale(1)";
        }, 300);
    });
}
function playSoundEkstrasensuPradzia(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/ekstrasensu-pradzia.mp3';
    sound.currentTime = 0;
    sound.play();
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("currentTrackName").innerText = 'Ekstrasensų pradžia';
    document.getElementById("soundDuration").innerText = '0:25';
    document.getElementById("pauseWithMute").style.transform = "scale(0)";
    document.getElementById("progressBg").style.pointerEvents = "all";
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
            document.getElementById("pauseWithMute").style.transform = "scale(1)";
        }, 300);
    });
}
function playSoundEkstrasensuFonas(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/ekstrasensu-fonas.mp3';
    sound.currentTime = 0;
    sound.play();
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("currentTrackName").innerText = 'Ekstrasensų fonas';
    document.getElementById("soundDuration").innerText = '17:25';
    document.getElementById("pauseWithMute").style.transform = "scale(0)";
    document.getElementById("progressBg").style.pointerEvents = "all";
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
            document.getElementById("pauseWithMute").style.transform = "scale(1)";
        }, 300);
    });
}
function playSoundMetuApdovanojimai(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/metu-apdovanojimai.mp3';
    sound.currentTime = 0;
    sound.play();
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("currentTrackName").innerText = 'Metų apdovanojimai';
    document.getElementById("soundDuration").innerText = '17:21';
    document.getElementById("pauseWithMute").style.transform = "scale(0)";
    document.getElementById("progressBg").style.pointerEvents = "all";
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
            document.getElementById("pauseWithMute").style.transform = "scale(1)";
        }, 300);
    });
}
function playSoundCatwalk(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/catwalk.mp3';
    sound.currentTime = 0;
    sound.play();
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("currentTrackName").innerText = 'Catwalk';
    document.getElementById("soundDuration").innerText = '00:34';
    document.getElementById("pauseWithMute").style.transform = "scale(0)";
    document.getElementById("progressBg").style.pointerEvents = "all";
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
            document.getElementById("pauseWithMute").style.transform = "scale(1)";
        }, 300);
    });
}
function playSoundDrumRoll(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/drum-roll.mp3';
    sound.currentTime = 0;
    sound.play();
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("currentTrackName").innerText = 'Drum roll';
    document.getElementById("soundDuration").innerText = '0:10';
    document.getElementById("pauseWithMute").style.transform = "scale(0)";
    document.getElementById("progressBg").style.pointerEvents = "all";
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
            document.getElementById("pauseWithMute").style.transform = "scale(1)";
        }, 300);
    });
}
function playSoundDaina(){
    document.getElementById('loadingAudio').style.display = "flex";
    document.getElementById('loadingAudio').style.animation = "spin3 0.65s linear infinite";
    sound.src = 'sounds/daina.mp3';
    sound.currentTime = 0;
    sound.play();
    soundPlayPauseIcon.classList.add("fa-pause");
    soundPlayPauseIcon.classList.remove("fa-play");
    document.getElementById("currentTrackName").innerText = 'Daina';
    document.getElementById("soundDuration").innerText = '2:46';
    document.getElementById("pauseWithMute").style.transform = "scale(0)";
    document.getElementById("progressBg").style.pointerEvents = "all";
    document.getElementById('l0').innerHTML = '   ';
    document.getElementById('l9').innerHTML = '   ';
    document.getElementById('l18').innerHTML = '   ';
    document.getElementById('l0').style.marginTop = '0';
    document.getElementById('l0').style.transform = 'scale(1.8)';
    document.getElementById('l0').style.fontWeight = '600';
    document.getElementById('l1').style.marginTop = '25%';
    document.getElementById('l1').style.transform = 'scale(1)';
    document.getElementById('l1').style.fontWeight = '400';
    document.getElementById('l2').style.marginTop = '100%';
    document.getElementById('l2').style.transform = 'scale(1)';
    document.getElementById('l2').style.fontWeight = '400';
    document.getElementById('l3').style.marginTop = '100%';
    document.getElementById('l3').style.transform = 'scale(1)';
    document.getElementById('l3').style.fontWeight = '400';
    document.getElementById('l4').style.marginTop = '100%';
    document.getElementById('l4').style.transform = 'scale(1)';
    document.getElementById('l4').style.fontWeight = '400';
    document.getElementById('l5').style.marginTop = '100%';
    document.getElementById('l5').style.transform = 'scale(1)';
    document.getElementById('l5').style.fontWeight = '400';
    document.getElementById('l6').style.marginTop = '100%';
    document.getElementById('l6').style.transform = 'scale(1)';
    document.getElementById('l6').style.fontWeight = '400';
    document.getElementById('l7').style.marginTop = '100%';
    document.getElementById('l7').style.transform = 'scale(1)';
    document.getElementById('l7').style.fontWeight = '400';
    document.getElementById('l8').style.marginTop = '100%';
    document.getElementById('l8').style.transform = 'scale(1)';
    document.getElementById('l8').style.fontWeight = '400';
    document.getElementById('l9').style.marginTop = '100%';
    document.getElementById('l9').style.transform = 'scale(1)';
    document.getElementById('l9').style.fontWeight = '400';
    document.getElementById('l9').style.color = 'black';
    document.getElementById('l10').style.marginTop = '100%';
    document.getElementById('l10').style.transform = 'scale(1)';
    document.getElementById('l10').style.fontWeight = '400';
    document.getElementById('l11').style.marginTop = '100%';
    document.getElementById('l11').style.transform = 'scale(1)';
    document.getElementById('l11').style.fontWeight = '400';
    document.getElementById('l12').style.marginTop = '100%';
    document.getElementById('l12').style.transform = 'scale(1)';
    document.getElementById('l12').style.fontWeight = '400';
    document.getElementById('l13').style.marginTop = '100%';
    document.getElementById('l13').style.transform = 'scale(1)';
    document.getElementById('l13').style.fontWeight = '400';
    document.getElementById('l14').style.marginTop = '100%';
    document.getElementById('l14').style.transform = 'scale(1)';
    document.getElementById('l14').style.fontWeight = '400';
    document.getElementById('l15').style.marginTop = '100%';
    document.getElementById('l15').style.transform = 'scale(1)';
    document.getElementById('l15').style.fontWeight = '400';
    document.getElementById('l16').style.marginTop = '100%';
    document.getElementById('l16').style.transform = 'scale(1)';
    document.getElementById('l16').style.fontWeight = '400';
    document.getElementById('l17').style.marginTop = '100%';
    document.getElementById('l17').style.transform = 'scale(1)';
    document.getElementById('l17').style.fontWeight = '400';
    document.getElementById('l18').style.marginTop = '100%';
    document.getElementById('l18').style.transform = 'scale(1)';
    document.getElementById('l18').style.fontWeight = '400';
    document.getElementById('l18').style.color = 'black';
    document.getElementById('l19').style.marginTop = '100%';
    document.getElementById('l19').style.transform = 'scale(1)';
    document.getElementById('l19').style.fontWeight = '400';
    document.getElementById('l20').style.marginTop = '100%';
    document.getElementById('l20').style.transform = 'scale(1)';
    document.getElementById('l20').style.fontWeight = '400';
    document.getElementById('l21').style.marginTop = '100%';
    document.getElementById('l21').style.transform = 'scale(1)';
    document.getElementById('l21').style.fontWeight = '400';
    document.getElementById('l22').style.marginTop = '100%';
    document.getElementById('l22').style.transform = 'scale(1)';
    document.getElementById('l22').style.fontWeight = '400';
    document.getElementById('l23').style.marginTop = '100%';
    document.getElementById('l23').style.transform = 'scale(1)';
    document.getElementById('l23').style.fontWeight = '400';
    document.getElementById('l24').style.marginTop = '100%';
    document.getElementById('l24').style.transform = 'scale(1)';
    document.getElementById('l24').style.fontWeight = '400';
    document.getElementById('l25').style.marginTop = '100%';
    document.getElementById('l25').style.transform = 'scale(1)';
    document.getElementById('l25').style.fontWeight = '400';
    document.getElementById('l26').style.marginTop = '100%';
    document.getElementById('l26').style.transform = 'scale(1)';
    document.getElementById('l26').style.fontWeight = '400';
    document.getElementById('l27').style.marginTop = '100%';
    document.getElementById('l27').style.transform = 'scale(1)';
    document.getElementById('l27').style.fontWeight = '400';
    document.getElementById('l28').style.marginTop = '100%';
    document.getElementById('l28').style.transform = 'scale(1)';
    document.getElementById('l28').style.fontWeight = '400';
    document.getElementById('l29').style.marginTop = '100%';
    document.getElementById('l29').style.transform = 'scale(1)';
    document.getElementById('l29').style.fontWeight = '400';
    document.getElementById('l30').style.marginTop = '100%';
    document.getElementById('l30').style.transform = 'scale(1)';
    document.getElementById('l30').style.fontWeight = '400';
    document.getElementById('l31').style.marginTop = '100%';
    document.getElementById('l31').style.transform = 'scale(1)';
    document.getElementById('l31').style.fontWeight = '400';
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById('l0').style.color = 'black';
        document.getElementById('l9').style.color = 'black';
        document.getElementById('l18').style.color = 'black';
    }
    else{
        document.getElementById('l0').style.color = 'white';
        document.getElementById('l9').style.color = 'white';
        document.getElementById('l18').style.color = 'white';
    }
    openLyrics();
    sound.addEventListener("canplaythrough", (event) => {
        setTimeout(() => {
            document.getElementById('loadingAudio').style.display = "none";
            document.getElementById("pauseWithMute").style.transform = "scale(1)";
        }, 300);
    });
}

function openScript() {
    document.getElementById("scenarijus").style.bottom = "0";
    document.getElementById("dashboard").style.width = "70%";
    document.getElementById("scriptBtn").style.opacity = "0";
    document.getElementById("scriptBtn").style.pointerEvents = "none";
    document.getElementById("barBelowNav").style.width = "70%";
    document.getElementById("soundPlayer").style.width = "70%";
    document.getElementById("playingTrackName").style.width = "18%";
    document.getElementById("visualsBtn").style.opacity = "0";
    document.getElementById("visualsBtn").style.pointerEvents = "none";
}
function closeScript() {
    document.getElementById("scenarijus").style.bottom = "-100%";
    document.getElementById("dashboard").style.width = "100%";
    document.getElementById("scriptBtn").style.opacity = "1";
    document.getElementById("scriptBtn").style.pointerEvents = "all";
    document.getElementById("barBelowNav").style.width = "100%";
    document.getElementById("soundPlayer").style.width = "100%";
    document.getElementById("playingTrackName").style.width = "20%";
    document.getElementById("visualsBtn").style.opacity = "1";
    document.getElementById("visualsBtn").style.pointerEvents = "all";
}

function openVisuals() {
    document.getElementById("vizualai").style.bottom = "0";
    document.getElementById("dashboard").style.width = "70%";
    document.getElementById("visualsBtn").style.opacity = "0";
    document.getElementById("visualsBtn").style.pointerEvents = "none";
    document.getElementById("vizualaiNav").style.top = "4.9%";
    document.getElementById("barBelowNav").style.width = "70%";
    document.getElementById("soundPlayer").style.width = "70%";
    document.getElementById("playingTrackName").style.width = "18%";
    document.getElementById("scriptBtn").style.opacity = "0";
    document.getElementById("scriptBtn").style.pointerEvents = "none";
}
function closeVisuals() {
    document.getElementById("vizualai").style.bottom = "-100%";
    document.getElementById("dashboard").style.width = "100%";
    document.getElementById("visualsBtn").style.opacity = "1";
    document.getElementById("visualsBtn").style.pointerEvents = "all";
    document.getElementById("vizualaiNav").style.top = "100%";
    document.getElementById("barBelowNav").style.width = "100%";
    document.getElementById("soundPlayer").style.width = "100%";
    document.getElementById("playingTrackName").style.width = "20%";
    document.getElementById("scriptBtn").style.opacity = "1";
    document.getElementById("scriptBtn").style.pointerEvents = "all";
}

function auksinisProtas(){
    document.getElementById("auksinisProtasDiv").style.pointerEvents = "none";
    document.getElementById("auksinisProtasWait").style.display = "flex";
    setTimeout(() => {
        document.getElementById("download_auksinis-protas").click();
    }, 1000);
    setTimeout(() => {
        document.getElementById("auksinisProtasDiv").style.pointerEvents = "all";
        document.getElementById("auksinisProtasWait").style.display = "none";
    }, 3000);
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