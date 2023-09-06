let songs = [
  {
    songName: 'Empty-Mind',
    filePath: "assets/songs/1.mp3",
    coverPath: 'assets/cover.jpeg'
  }, {
    songName: 'Please Calm My Mind',
    filePath: "assets/songs/2.mp3",
    coverPath: 'assets/cover.jpeg'
  }, {
    songName: 'Chill Lofi song',
    filePath: "assets/songs/3.mp3",
    coverPath: 'assets/cover.jpeg'
  }, {
    songName: 'Eco Technology',
    filePath: "assets/songs/4.mp3",
    coverPath: 'assets/cover.jpeg'
  }, {
    songName: 'The Weekend',
    filePath: "assets/songs/5.mp3",
    coverPath: 'assets/cover.jpeg'
  }, {
    songName: 'Just Relax',
    filePath: "assets/songs/6.mp3",
    coverPath: 'assets/cover.jpeg'
  }, {
    songName: 'Lofi Chill Medium',
    filePath: "assets/songs/7.mp3",
    coverPath: 'assets/cover.jpeg'
  }, {
    songName: 'Lofi Study',
    filePath: "assets/songs/8.mp3",
    coverPath: 'assets/cover.jpeg'
  }, {
    songName: 'Lofi Chill Medium',
    filePath: "assets/songs/lofi-chill-medium-version-159456",
    coverPath: 'assets/cover.jpeg'
  }, {
    songName: 'Lofi Study',
    filePath: "assets/songs/lofi-study-112191",
    coverPath: 'assets/cover.jpeg'
  }
]

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('assets/songs/3.mp3'); 
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


songItems.forEach((element, i) => {
  // console.log(element, i);
  element.getElementsByTagName('img')[0].src = songs[i].coverPath;
  element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});



// audioElement.play();




//Handle play pause click
masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  }else {
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
  }
})
//Listen to Events
audioElement.addEventListener('timeupdate', () => {
   //Update seekbar
   let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);//How many percentage this works
   myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
  audioElement.currentTime = myProgressBar.value * audioElement.duration / 100
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
  });
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)  => {
  element.addEventListener('click', (e) => {
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = `assets/songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  });
});

document.getElementById('next').addEventListener('click', () => {
  if (songIndex >= 9) {
    songItems = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `assets/songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click', () => {
  if (songIndex <= 0) {
    songItems = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `assets/songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});