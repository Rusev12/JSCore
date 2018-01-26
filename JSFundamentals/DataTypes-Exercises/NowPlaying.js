function printSong(arr) {
    let [songName , artistName , duration] = [arr[0] , arr[1] , arr[2]];

    console.log(`Now Playing: ${artistName} - ${songName} [${duration}]`)
}

printSong(['Number One', 'Nelly', '4:09'])