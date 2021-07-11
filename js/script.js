window.onload = function () {
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
     
     const drumsMarker = document.getElementById('drums-marker');
     drumsMarker.addEventListener('markerFound', () => drums.mute(false));
     drumsMarker.addEventListener('markerLost', () => drums.mute(true));

     const pianoMarker = document.getElementById('piano-marker');
     pianoMarker.addEventListener('markerFound', () => piano.mute(false));
     pianoMarker.addEventListener('markerLost', () => piano.mute(true));

     const micMarker = document.getElementById('mic-marker');
     micMarker.addEventListener('markerFound',() => mic.mute(false));
     micMarker.addEventListener('markerLost', () => mic.mute(true));

     const guitarMarker = document.getElementById('guitar-marker');
     guitarMarker.addEventListener('markerFound', () => guitar.mute(false));
     guitarMarker.addEventListener('markerLost', () => guitar.mute(true));
}