import { songqueue } from "./songQueue";

export function genSongQueueDis(){
    const poop = document.getElementById("SongQueueContainer");
    
    songqueue.forEach(element=> {
        console.log(songqueue)
        const songName = document.createElement("p");
        const attr = document.createAttribute("id");
        attr.value = songqueue.indexOf(element);
        songName.setAttributeNode(attr);
        songName.innerHTML = element.getSongTitle();
        poop.appendChild(songName) 
    });
}