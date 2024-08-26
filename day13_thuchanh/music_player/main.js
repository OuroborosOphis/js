/*
 1. Render songs
 2. Scroll top
 3. Play / pause / seek
 4. CD rotate
 5. Next / prev
 6. Random
 7. Next / repeat when ended
 8. Active song
 9. Scroll active song into view
 10. Play song when click 
*/

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'F8-PLAYER'

const player = $('.player')
const playList = $('.playlist')
const cd = $('.cd')
const audio = $('#audio')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const playBtn = $('.btn-toggle-play')
const repeatBtn = $('.btn-repeat')
const prevBtn = $('.btn-prev')
const nextBtn = $('.btn-next')
const randomBtn = $('.btn-random')
const progress = $('.progress')

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
  songs: [
    {
      name: "Tam Bái Hồng Trần Lương",
      singer: "Doãn Tích Miên",
      path: "./assets/audio/song1.mp3",
      image: "./assets/image/song1.jpg",
    },
    {
      name: "Mang Chủng",
      singer: "Âm Khuyết Thi Thính",
      path: "./assets/audio/song2.mp3",
      image: "./assets/image/song2.jpg",
    },
    {
      name: "Hải Thị Thận Lâu",
      singer: "Hứa Lam Tân",
      path: "./assets/audio/song3.mp3",
      image: "./assets/image/song3.jpg",
    },
    {
      name: "Ta Mượn Hồng Trần 2 Lạng Rượu",
      singer: "Nam Chiêu",
      path: "./assets/audio/song4.mp3",
      image: "./assets/image/song4.jpg",
    },
    {
      name: "Thương Ly Biệt",
      singer: "Ngụy Tân Vũ",
      path: "./assets/audio/song5.mp3",
      image: "./assets/image/song5.jpg",
    },
    {
      name: "Yến Vô Hiết",
      singer: "Tương Tuyết Nhi",
      path: "./assets/audio/song6.mp3",
      image: "./assets/image/song6.jpg",
    },
    {
      name: "Phong, Hoa, Tuyết, Nguyệt",
      singer: "Tử Đường Túc",
      path: "./assets/audio/song7.mp3",
      image: "./assets/image/song7.jpg",
    },
    {
      name: "Rất Muốn Vẫn Còn Nhỏ",
      singer: "Đậu Bao",
      path: "./assets/audio/song8.mp3",
      image: "./assets/image/song8.jpg",
    },
    {
      name: "Phương Xa",
      singer: "Hồng Bố Điều",
      path: "./assets/audio/song9.mp3",
      image: "./assets/image/song9.jpg",
    },
    {
      name: "Yêu Tiền Yêu Bản Thân ",
      singer: "Hoàng Tĩnh Mỹ",
      path: "./assets/audio/song10.mp3",
      image: "./assets/image/song10.jpg",
    },
  ],

  setConfig: function(key, value){
    this.config[key] = value
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
  },

  defineProperties: function(){
    Object.defineProperty(this, 'currentSong', {
      get: function(){
        return this.songs[this.currentIndex]
      }
    })
  },

  // render playlist tu song 
  render: function(){
    const htmls = this.songs.map((song, index) => {
      return `
          <div class="song ${index===this.currentIndex ? 'active' : ''}" data-index=${index}>
              <div class="thumb" style="background-image: 
                      url('${song.image}')">
              </div>
              <div class="body">
                  <h3 class="title">${song.name}</p>
                  <p class="author">${song.singer}</p>
              </div>
              <div class="option">
                  <i class="fas fa-ellipsis-h"></i>
              </div>
          </div>
      `
    })
    playList.innerHTML = htmls.join("");
  },
  // xong 1. render song

  // xu ly su kien
  handleEvents: function(){
    const _this = this  
    // xu ly khi cuon man hinh thi cai cd se nho dan va mo di 
    const cdWidth = cd.offsetWidth

    // xu ly CD quay va dung
    const cdThumbAnimate = cdThumb.animate([
      { transform: 'rotate(360deg)'}
    ], {
      duration: 10000, //10s
      iterations: Infinity
    })
    cdThumbAnimate.pause()

    document.onscroll = function(){
      // lay ra khoang cach tu dau trang den vi tri hien tai khi cuon 
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      // 
      const newCdWidth = cdWidth - scrollTop

      cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
      cd.style.opacity = newCdWidth / cdWidth

       // xong 2. scroll top
    };

    // xu ly khi click play 
    playBtn.onclick = function(){
      if(_this.isPlaying){
        audio.pause()
      } else {
        audio.play()
      }       
    };

    // khi song duoc play 
    audio.onplay = function(){
      _this.isPlaying = true
      player.classList.add('playing')
      cdThumbAnimate.play()
    }

    // khi song bi pause
    audio.onpause = function(){
      _this.isPlaying = false
      player.classList.remove('playing')
      cdThumbAnimate.pause()
    };

    let isSeeking = false;

    // khi tien do cua bai hat thay doi
    audio.ontimeupdate = function(){
      if (audio.duration && !isSeeking) {
        const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
        progress.value = progressPercent
      }
    };

    // xu ly khi tua bai hat
    // progress.onchange = function(e){
    //   const seekTime = e.target.value * audio.duration / 100
    //   audio.currentTime = seekTime
    // }

    // dung input thay vi onchange de cap nhap thoi gian phat ngay lap tuc khi tua
    

    progress.oninput = function(e) {
      isSeeking = true;
      const seekTime = e.target.value * audio.duration / 100;
      audio.currentTime = seekTime;
    };

    progress.onchange = function(e) {
      isSeeking = false;
      const seekTime = e.target.value * audio.duration / 100;
      audio.currentTime = seekTime;
      if (_this.isPlaying) {
        audio.play();
      }
    };

    // Tạm dừng audio khi người dùng bắt đầu kéo thanh tiến trình và phát lại khi người dùng thả thanh tiến trình.
    progress.onmousedown = function() {
      audio.pause();
    };

    progress.onmouseup = function() {
      if (!_this.isPlaying) {
        audio.play();
      }
    };

    // khi next song
    nextBtn.onclick = function(){
      if (_this.isRandom){
        _this.playRandomSong()
      } else{
        _this.nextSong()
      }
      audio.play()
      _this.render()
      _this.scrollToActiveSong()
    };

    // khi prev song
    prevBtn.onclick = function(){
      if(_this.isRandom){
        _this.playRandomSong()
      } else {
        _this.prevSong()
      }
      audio.play()
      _this.render()
      _this.scrollToActiveSong()
    }

    // xu ly bat/tat random song
    randomBtn.onclick = function(e){
      // if (this.isRandom){
      //   this.isRandom = false
      //   randomBtn.classList.remove('active')
      // } else {
      //   randomBtn.classList.add('active')
      //   this.isRandom = true  
      // }  
      
      // cach don gian hon
      _this.isRandom = !_this.isRandom
      _this.setConfig("isRandom", _this.isRandom)
      randomBtn.classList.toggle('active', this.isRandom)
    }

    // xu ly repeat song
    repeatBtn.onclick = function(){
      _this.isRepeat = !_this.isRepeat
      _this.setConfig("isRepeat", _this.isRepeat)
      repeatBtn.classList.toggle('active', _this.isRepeat)
    }

    // xu ly next song khi audio end
    audio.onended = function(){
      if(_this.isRepeat){
        audio.play()
      } else {
        nextBtn.click()
      }
    }

    // lang nghe hanh vi click vao playlist
    playList.onclick = function(e){
      const songNode = e.target.closest('.song:not(.active)')

      if (songNode || e.target.closest('.option'))  // closest tim phan tu matches 
      {
        // xu ly khi click vao song 
        if(songNode) {
          // _this.currentIndex = songNode.getAttribute('data-index')
          // c2
          _this.currentIndex = Number(songNode.dataset.index)
          _this.loadCurrentSong()
          _this.render()
          audio.play()
        }

        // xu ly khi click vao song option
        if(e.target.closest('.option')) {

        }
      }
    }
  },

  scrollToActiveSong: function(){
    setTimeout(()=>{
      $('.song.active').scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }, 300)
  },

  loadCurrentSong: function(){
    heading.innerText = this.currentSong.name
    cdThumb.style.backgroundImage=`url(${this.currentSong.image})`
    audio.src=this.currentSong.path
  },

  loadConfig: function() {
    // this.isRandom = this.config.isRandom
    // this.isRepeat = this.config.isRepeat

    // c2
    // hop nhat cau hinh cua obj voi config
    // k nen vi tuong lai co the co key khong muon hop nhat vao this
    Object.assign(this, this.config)
  },

  nextSong: function(){
    this.currentIndex++
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0
    }
    this.loadCurrentSong()
  },

  prevSong: function(){
    if(this.currentIndex == 0){
      this.currentIndex = this.songs.length - 1
    } else {
      this.currentIndex--
    }
    this.loadCurrentSong()
  },

  playRandomSong: function(){
    do {
      var randomIndex = Math.floor(Math.random() * this.songs.length)
    } while(this.currentIndex===randomIndex)
    this.currentIndex = randomIndex
    this.loadCurrentSong()
  },

  start: function(){
    this.loadConfig()   // gan cau hinh tu config vao ung dung 
    this.defineProperties() // dinh nghia cac thuoc tinh cho obj
    this.handleEvents()  // lang nghe / xu ly cac su kien (DOM event)
    this.loadCurrentSong() // tai thong tin bai hat dau tien vao UI khi chay app 
    this.render() // render playist 

    // hien thi trang thai ban dau cua button repeat & random
    randomBtn.classList.toggle('active', this.isRandom)
    repeatBtn.classList.toggle('active', this.isRepeat)
  }
}

app.start()

