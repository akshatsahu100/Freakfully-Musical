let drums = new Howl({
     src: ['./audio/piano.mp3']
});
let guitar = new Howl({
     src: ['./audio/guitar.mp3']
});
let mic = new Howl({
     src: ['./audio/mic.mp3']
});
let piano = new Howl({
     src: ['./audio/piano.mp3']
});

drums.play();
guitar.play();
mic.play();
piano.play();

function add(event){
     let data = event.target.data;
     console.log(data);
     data.mute(false);
}
function addDrums() {
     drums.mute(false);
}
function addGuitar() {
     guitar.mute(false);
}
function addMic() {
     mic.mute(false);
}
function addPiano() {
     piano.mute(false);
}
function removeDrums() {
     drums.mute(true);
}
function removePiano() {
     piano.mute(true);
}
function removeMic() {
     mic.mute(true);
}
function removeGuitar() {
     guitar.mute(true);
}
window.onload = function () {
     const drumsMarker = document.getElementById('drums-marker');
     drumsMarker.addEventListener('markerFound', function () {
          addDrums();
     });
     drumsMarker.addEventListener('markerLost', function () {
          removeDrums();
     });

     const pianoMarker = document.getElementById('piano-marker');
     pianoMarker.addEventListener('markerFound', function () {
          addPiano();
     });
     pianoMarker.addEventListener('markerLost', function () {
          removePiano();
     });

     const micMarker = document.getElementById('mic-marker');
     micMarker.addEventListener('markerFound', function () {
          addMic();
     });
     micMarker.addEventListener('markerLost', function () {
          removeMic();
     });

     const guitarMarker = document.getElementById('guitar-marker');
     guitarMarker.addEventListener('markerFound', function () {
          addGuitar();
     });
     guitarMarker.addEventListener('markerLost', function () {
          removeGuitar();
     });
}