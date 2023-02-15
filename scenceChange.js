import { ListOfSongs } from "./ListOfsongs";
import { setupSongPlaying } from "./songPlaying";
import { songqueue } from "./songQueue"

export function sceneChange (element) {
    ListOfSongs.forEach(element => {
        document.getElementById(`song${ListOfSongs.indexOf(element)}`).addEventListener("click", function() {
            songqueue.push(element);
        });
    });
    const playSongs = document.getElementById("playSongs");
    
    playSongs.addEventListener("click", function() {
        setupSongPlaying(element,true);
    });


}