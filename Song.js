export default class Song {

    constructor(SongTitle, Artist, mp3, controls,albumCover) {
      this.SongTitle = SongTitle;
      this.Artist = Artist;
      this.mp3 = mp3;
      this.controls = controls;
      this.albumCover = albumCover
    }

    getSongTitle(element){
        return this.SongTitle;
    }
    setSongTitle(value){
        this.SongTitle = value;
    }
    getArtist(element){
        return this.Artist;
    }
    setArtist(value){
        this.Artist = value;
    }
    getmp3(element){
        return this.mp3;
    }
    setmp3(value){
        this.mp3 = value;
    }
    getControls(element){
        return this.controls;
    }
    setControls(value){
        this.controls = value;
    }
    getalbumCover(element){
        return this.albumCover;
    }
    setalbumCover(value){
        this.albumCover = value;
    }
    
  }



