let count = 0;

function togglePlay(idName) {
  let audio = document.getElementById(idName);
  audio.play();

  if (count == 0) {
    /* So if count=0 , make count = 1 and play the song */
    count = 1;
    audio.play();
    /* Now count=1 , if any the button is tapped then as count=1 , it will come in else stmt and again become 0 ,
    then if clicked again then count = 0 which will keep repeating */
  } else {
    count = 0;
    audio.pause();
  }
}
