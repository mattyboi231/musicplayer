import { setupDisplayName } from './Displaysong'
import { genSongQueueDis } from './genSongQueueDis'
import { genSongSelectUI } from './genSongSelectUI'
import { sceneChange } from './scenceChange'
import { setupAudioPlayer } from './setupAudioPlayer'
import { songqueue } from "./songQueue"

export function setupSongPlaying(element,SongPlaying){

    if (SongPlaying === true) {
        element.innerHTML = `
        <div>
            <h2 id="DisSongAndArtist"> Playing x by y </h2>
            <div>
            <img id = "SongCover" src = "Kendrick-Lamar-Good-Kid-Maad-City-Cover.jpg" alt = "Kendrick Album cover" width = "500" height = "500"></img>
            </div>
            <div>
                <h1 id="SongTitle"> </h1>
                <h5 id="Artist"></h5>
            </div>
            <div id="SongQueueContainer">
                <h2>Songs in queue : </h2><br>
            </div>
            <div class="buttonContainer">
                    <button id = "SkipBack">
                    <img id = "SkipBackImg" src = "play-skip-back-svgrepo-com.svg" alt = "SkipBackImg" width = "70" height = "70"></img>
                    </button>
                    <button id = "Pause"> 
                    <img id = "PauseImg" src = "pause-play-button-svgrepo-com.svg" alt = "PauseImg" width = "70" height = "70"></img>
                    </button>
                    <button id = "Skip">
                    <img id = "SkipImg" src = "play-skip-forward-svgrepo-com.svg" alt = "SkipImg" width = "70" height = "70"></img>
                    </button>
            </div> 
            <div class="songLengthContainer">
                <label for = "songTime" id = endtime></label>
                <input type="range" min= "0" max= "100" value= "0" class="slider" id="SongTime" name = "songTime">
            </div>
            <div class="volumeContainer">
                <label for = "volume" id = volumeDown>
                    <img id = "volumeUpImg" src = "volume-down-svgrepo-com.svg" alt = "volumeUpImg" width = "30" height = "30"></img>
                </label>
                <input type="range" min= "0" max= "100" value= "50" class="slider" id="volume" name = "volume">
                <label for = "volume" id = volumeUp>
                    <img id = "volumeUpImg" src = "volume-up-svgrepo-com.svg" alt = "volumeUpImg" width = "30" height = "30"></img>
                </label>
            </div>
        
        </div>
        `
        genSongQueueDis()
        setupAudioPlayer(document.querySelector('#Artist') , document.querySelector('#SongTitle'),document.querySelector('#DisSongAndArtist'),element)
    }else{
        element.innerHTML = `
        <div>
            <h1>Pick a song to listen to :</h1>
            <div id= "songButtonContainer">
            
            </div>
            <button id = "playSongs"> PLay songs :)</button>
            </div>       
        </div>
        `
        genSongSelectUI()
        sceneChange (element);
    }
}
