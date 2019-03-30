function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function solver(game, col){
    if (col >= N) 
        return true;
    
    for (let i = 0; i < N; i++) 
    { 
        /* Check if the queen can be placed on 
            board[i][col] */
        game[i][col] = new queen(i,col,wcell);
        await sleep(speed); 
        if ( isSafe(game, i, col) ) 
        { 
        
            /* recur to place rest of the queens */
            if ( await solver(game, col + 1) ){
                console.log('recur');
                return true; 
            }
            /* If placing queen in board[i][col] 
                doesn't lead to a solution, then 
                remove queen from board[i][col] */
                game[i][col] = 0; // BACKTRACK 
                displayqueens(game);
        }else{
            game[i][col]=0
        } 
    }
}

async function solve() 
{ 
    game = new Array(n);
    for (let i = 0; i < n; i++) {
        game[i] = new Array(n);
    }
  
    await solver(game, 0);
    console.log('sas');
    console.log(game); 
    return true; 
} 