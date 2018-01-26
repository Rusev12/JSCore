function printChessBoard(n) {
    console.log('<div class="chessboard">')
    for(i = 1; i <=n; i++){
        if(i %2 !=0){
            console.log('   <div>')
            for(j=1 ; j<=n; j++){
                if(j % 2==0){
                    console.log('       <span class="white"></span>')
                }
                else {
                    console.log('       <span class="black"></span>')
                }
            }

            console.log('   </div>')
        }
        else {
            console.log('   <div>')
            for(j=1 ; j<=n; j++){
                if(j % 2==0){
                    console.log('       <span class="black"></span>')
                }
                else {
                    console.log('       <span class="white"></span>')
                }
            }
            console.log('   </div>')
        }

    }

    console.log('</div>')
}

printChessBoard(4)

