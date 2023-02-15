import { songqueue } from "./songQueue";

export function setupDisplayName(element1, element2, element3, index ){
        console.log(index);
        const Artist = songqueue[index].getArtist();
        console.log(Artist);
        const SongTitle =songqueue[index].getSongTitle();
        const songName = document.getElementById(index);
        const SongCover = document.getElementById("SongCover");
        try {
                const lastSongName = document.getElementById(index-1);
                lastSongName.innerHTML =songqueue[index-1].getSongTitle()
        } catch (error) {
            console.log("first")    
        }
        element1.innerHTML = `By ${Artist}`;
        element2.innerHTML = SongTitle;
        element3.innerHTML = `Playing ${SongTitle} by ${Artist}`
        songName.innerHTML = `Playing ${SongTitle}`
        SongCover.src = songqueue[index].getalbumCover();
}