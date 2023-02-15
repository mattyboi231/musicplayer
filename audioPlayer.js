import { songqueue } from "./songQueue";

export function audioPlayer(audio,index){
    const endTime = document.getElementById("endtime")
    audio.play(); 
    audio.setAttribute("preload", "metadata");
    document.body.appendChild(audio);
    audio.volume = volume.value /100;
    audio.addEventListener('loadedmetadata',function(){
        console.log(Math.floor(audio.duration % 60));   
        console.log(audio.duration)
        SongTime.max = audio.duration;
        startListeners()
    });
    function changeTimeSlider(){
       try {
         if (songqueue[index].getControls() === true){
             SongTime.value = audio.currentTime ;
             if (Math.floor(audio.duration % 60) < 10 && Math.floor(audio.currentTime % 60) < 10) {
                 endTime.innerHTML = `${Math.floor( audio.currentTime / 60)}.0${Math.floor( audio.currentTime % 60)} / ${Math.floor(audio.duration / 60)}.0${Math.floor(audio.duration % 60)}`;
             } else if (Math.floor(audio.duration % 60) > 10 && Math.floor(audio.currentTime % 60) < 10){
                 endTime.innerHTML = `${Math.floor( audio.currentTime / 60)}.0${Math.floor( audio.currentTime % 60)} / ${Math.floor(audio.duration / 60)}.${Math.floor(audio.duration % 60)}`;
             } else if (Math.floor(audio.duration % 60) < 10 && Math.floor(audio.currentTime % 60) > 10){
                 endTime.innerHTML = `${Math.floor( audio.currentTime / 60)}.${Math.floor( audio.currentTime % 60)} / ${Math.floor(audio.duration / 60)}.0${Math.floor(audio.duration % 60)}`;
             }else{
                 endTime.innerHTML = `${Math.floor( audio.currentTime / 60)}.${Math.floor( audio.currentTime % 60)} / ${Math.floor(audio.duration / 60)}.${Math.floor(audio.duration % 60)}`;
             }
         }
       } catch (error) {
        console.log("too fast xd I think ")
       }
       
    }

    function changeSongTime(){
        if (songqueue[index].getControls() === true){
            audio.currentTime = SongTime.value;
        }
    }
    function changeSongAudio(){
        if (songqueue[index].getControls() === true){
            audio.volume = volume.value /100;
        }
    }

    function puasePlay(){
        if (songqueue[index].getControls() === true){
            if(audio.paused === true){
                audio.play();
                console.log(audio)
            }else{
                audio.pause();
                console.log(audio)
            }
        }
    }

    function startListeners(){
        audio.addEventListener('timeupdate', changeTimeSlider);
        SongTime.addEventListener('input',changeSongTime);
        volume.addEventListener('input',changeSongAudio);    
        Pause.addEventListener("click", puasePlay);
    }
    
   
    
    

}