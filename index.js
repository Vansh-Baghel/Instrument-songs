// let count = 0;

// function togglePlay(idName) {
//   let audio = document.getElementById(idName);
//
//   if (audio.paused) {
//     /* So if count=0 , make count = 1 and play the song */
//     count = 1;
//     audio.play();
//     stopAllSongs();
//     // console.log(current);
//
//     /* Now count=1 , if any the button is tapped then as count=1 , it will come in else stmt and again become 0 ,
//     then if clicked again then count = 0 which will keep repeating */
//   } else {
//       count = 0;
//     audio.pause();
//   }
// }

// Selecting all the buttons.
const song1Btn = document.querySelector("#song-1");
const song2Btn = document.querySelector("#song-2");
const song3Btn = document.querySelector("#song-3");
const song4Btn = document.querySelector("#song-4");

// Selecting all the audios.
const song1 = document.querySelector("#audio-1");
const song2 = document.querySelector("#audio-2");
const song3 = document.querySelector("#audio-3");
const song4 = document.querySelector("#audio-4");

// Selecting all the audio available on the page to get a nodelist(array).
const allSongs = document.querySelectorAll("audio");

// A stopAllSongs function which uses a forEach loop on the nodelist to pause all the songs on the page through pause().
function stopAllSongs() {
  allSongs.forEach(function (song) {
    song.pause();
  });
}

song1Btn.addEventListener("click", function () {
  if (song1.paused) {
    // Everytime song1.paused is true, it will first stop all the songs and then play the current.
    stopAllSongs();
    song1.play();
  } else {
    song1.pause();
  }
});

song2Btn.addEventListener("click", function () {
  if (song2.paused) {
    stopAllSongs();
    song2.play();
  } else {
    song2.pause();
  }
});

song3Btn.addEventListener("click", function () {
  if (song3.paused) {
    stopAllSongs();
    song3.play();
  } else {
    song3.pause();
  }
});

song4Btn.addEventListener("click", function () {
  if (song4.paused) {
    stopAllSongs();
    song4.play();
  } else {
    song4.pause();
  }
});
