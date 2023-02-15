import { setupSongPlaying } from "./songPlaying";
import { setupDisplayName } from "./Displaysong";
import { audioPlayer } from "./audioPlayer";
import { songqueue } from "./songQueue";
import { deleteSongQueueDis } from "./deleteSongQueueDis";
import { ListOfSongs } from "./ListOfsongs";


export function setupAudioPlayer(element1, element2, element3,element4 ){
    let index = 0; 
    console.log(songqueue)
    let audio = new Audio(songqueue[index].getmp3());
    let oldAudio = [];
    songqueue[index].setControls(true);
    const Skip = document.getElementById("Skip");
    const SkipBack = document.getElementById("SkipBack");
    let exists = false;
    setupDisplayName(element1, element2, element3, index)
    audioPlayer(audio,index)
    audio.addEventListener('ended',function(){
        oldAudio.push(audio);
        audio.pause();
        songqueue[index].setControls(false);
        if (index + 1 >= songqueue.length){
            deleteSongQueueDis()
            for (let index = 0; index < ListOfSongs.length; index++) {
                songqueue.pop(); 
        }
            setupSongPlaying(element4,false);
        }else{
            index ++;
            oldAudio.forEach(element => {
                if(element.src.substring(element.src.lastIndexOf("/") + 1) === songqueue[index].getmp3()){
                    audio = element;
                    exists = true;
                    console.log(exists);
                }
            });
            if(exists === false){
                audio = new Audio(songqueue[index].getmp3())
            }
            songqueue[index].setControls(true);
            audioPlayer(audio,index)
            setupDisplayName(element1, element2, element3, index)
        }
    });
    SkipBack.addEventListener('click',function(){
        oldAudio.push(audio);
        console.log(songqueue.length)
        console.log(index)
        if (index != 0){
            audio.pause();
            songqueue[index].setControls(false);
            index --;
            audio = oldAudio[oldAudio.length-2];
            songqueue[index].setControls(true);
            audioPlayer(audio,index)
            setupDisplayName(element1, element2, element3, index)
        }
    });
    Skip.addEventListener('click',function(){
        oldAudio.push(audio);
        audio.pause();
        songqueue[index].setControls(false);
        if (index + 1 >= songqueue.length){
            deleteSongQueueDis()
          for (let index = 0; index < ListOfSongs.length; index++) {
                  songqueue.pop(); 
          }
            setupSongPlaying(element4,false)
        }else{
            index ++;
            oldAudio.forEach(element => {
                if(element.src.substring(element.src.lastIndexOf("/") + 1) === songqueue[index].getmp3()){
                    audio = element;
                    exists = true;
                    console.log(exists);
                }
            });
            if(exists === false){
                audio = new Audio(songqueue[index].getmp3())
            }
            songqueue[index].setControls(true);
            audioPlayer(audio,index)
            setupDisplayName(element1, element2, element3, index)
        }
    });


    
}