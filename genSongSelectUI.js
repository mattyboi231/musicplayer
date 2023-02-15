import { ListOfSongs } from "./ListOfsongs";

export function genSongSelectUI () {
    const songButtonContainer= document.getElementById("songButtonContainer");

    ListOfSongs.forEach(element=> {
        const div = document.createElement("div");
        const songName = document.createElement("button");
        const attr = document.createAttribute("id");
        attr.value = `song${ListOfSongs.indexOf(element)}`;
        songName.setAttributeNode(attr);
        songName.innerHTML = `${element.getSongTitle()} by ${element.getArtist()}`
        console.log("f")
        div.append(songName)
        songButtonContainer.append(div)
    });
    

}