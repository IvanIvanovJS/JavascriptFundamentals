function songs(arr){
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    } 
    let numberOfSongs = +arr[0];
    for(let i = 1; i <= numberOfSongs; i++){
        let [typeList, name, time] = arr[i].split(`_`);
        let currentSong = new Song(typeList,name,time)
        if(arr[arr.length - 1] === `all`){
            console.log(name);

        } else if (typeList === arr[arr.length - 1]){
            console.log(name);
            
        }
        
        
    }
}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )