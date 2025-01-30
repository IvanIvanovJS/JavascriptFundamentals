function gramophone(bandName, albumName, songName){
    let songDuration = bandName.length * albumName.length * songName.length / 2;
    let rotations = songDuration / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
    
}
gramophone('Rammstein', 'Sehnsucht', 'Engel')