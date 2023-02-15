import { songqueue } from "./songQueue";

export function deleteSongQueueDis(){
    
    songqueue.forEach(element=> {
        const songName = document.getElementById(songqueue.indexOf(element));
        songName.remove();
    });
}