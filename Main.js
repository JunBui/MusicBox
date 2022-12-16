const music = new Audio('./assets/css/audio/1.mp3');
// music.play();

const songs = [
    {
        id: '1',
        SongName: `Tình yêu là <br> <div class="sub_title">Hiền Hồ</div>`,
        poster: "./assets/css/fonts/img/1.jpg",
    },
    {
        id: '2',
        SongName: `Như em đã thấy<br> <div class="sub_title">Nân</div>`,
        poster: "./assets/css/fonts/img/2.jpg",
    },
    {
        id: '3',
        SongName: `Lạ lùng <br> <div class="sub_title">Vũ</div>`,
        poster: "./assets/css/fonts/img/3.jpg.jpg",
    },
    {
        id: '4',
        SongName: `Nụ cười nàng<br> <div class="sub_title">Pjnboys</div>`,
        poster: "./assets/css/fonts/img/4.jpg",
    },
    {
        id: '5',
        SongName: `Một ngàn nỗi đau<br>
        <div class="sub_title">Văn Mai Hương</div>`,
        poster: "./assets/css/fonts/5.jpg",
    },
    {
        id: '6',
        SongName: `Vì anh đâu có biết<br>
        <div class="sub_title">Madihu,Vũ</div>`,
        poster: "./assets/css/fonts/img/6.jpg",
    },
    {
        id: '7',
        SongName: `Anh yêu em cực<br>
        <div class="sub_title">Linh Thộn, Minh Vũ</div>`,
        poster: "./assets/css/fonts/img/7.jpg",
    },
    {
        id: '8',
        SongName: `Ta còn một đời để yêu<br>
        <div class="sub_title">Đoàn Minh Quân</div>`,
        poster: "./assets/css/fonts/img/8.jpg",
    },
    {
        id: '9',
        SongName: `Đế vương<br>
        <div class="sub_title">Đình Dũng`,
        poster: "./assets/css/fonts/img/9.jpg",
    },
    {
        id: '10',
        SongName: `Tình yêu là <br> <div class="sub_title">Hiền Hồ</div>`,
        poster: "./assets/css/fonts/img/10.jpg",
    },
    {
        id: '11',
        SongName: `Tình yêu là <br> <div class="sub_title">Hiền Hồ</div>`,
        poster: "./assets/css/fonts/img/11.jpg",
    },
    {
        id: '12',
        SongName: `Tình yêu là <br> <div class="sub_title">Hiền Hồ</div>`,
        poster: "./assets/css/fonts/img/12.jpg",
    },
    {
        id: '13',
        SongName: `Tình yêu là <br> <div class="sub_title">Hiền Hồ</div>`,
        poster: "./assets/css/fonts/img/13.jpg",
    },
    {
        id: '14',
        SongName: `Tình yêu là <br> <div class="sub_title">Hiền Hồ</div>`,
        poster: "./assets/css/fonts/img/14.jpg",
    },
    {
        id: '15',
        SongName: `Tình yêu là <br> <div class="sub_title">Hiền Hồ</div>`,
        poster: "./assets/css/fonts/img/15.jpg",
    },
    {
        id: '16',
        SongName: `Tình yêu là <br> <div class="sub_title">Hiền Hồ</div>`,
        poster: "./assets/css/fonts/img/16.jpg",
    },
    {
        id: '17',
        SongName: `Tình yêu là <br> <div class="sub_title">Hiền Hồ</div>`,
        poster: "./assets/css/fonts/img/17.jpg",
    },
    {
        id: '18',
        SongName: `Tình yêu là <br> <div class="sub_title">Hiền Hồ</div>`,
        poster: "./assets/css/fonts/img/18.jpg",
    },
    {
        id: '19',
        SongName: `Tình yêu là <br> <div class="sub_title">Hiền Hồ</div>`,
        poster: "./assets/css/fonts/img/19.jpg",
    },
    {
        id: '20',
        SongName: `Chơi<br> <div class="sub_title">Wack</div>`,
        poster: "./assets/css/fonts/img/20.jpg",
    }
]

Array.from(document.getElementsByClassName('.song_item')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML= songs[i].SongName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');


masterPlay.addEventListener('click', () =>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill')
        masterPlay.classList.remove('bi-pause-fill')   
    }
});

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');

Array.from(document.getElementsByClassName('.playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        music.src = `.assets/css/audio/${index}.mp3`;
        poster_master_play.src = `./assets/css/fonts/img/${index}.jpg`
        music.play();
    })
})













