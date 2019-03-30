var cnv;
var n = 5;
var run = 0;
var pause = 0;
var N = n;
var width = 0;
var qimg;
function setup() {
    var canvasDiv = document.getElementById('sim_cont');
    var width = canvasDiv.offsetWidth * 0.7;
    var cnv = createCanvas(width, width);
    cnv.parent('sim_cont');
    columns = n;
    rows = columns;
    board = new Array(columns);
    for (let i = 0; i < columns; i++) {
        board[i] = new Array(rows);
    }
    
    wcell = width/n;
    q1 = loadImage('assets/q1.png');
    q2 = loadImage('assets/q2.png');
    q3 = loadImage('assets/q3.jpeg');
    q4 = loadImage('assets/q4.png');
    q6 = loadImage('assets/q6.jpg');
    q5 = loadImage('assets/q5.jpg');
    qimg = q1;
    init();
    //background(255, 0, 200);
    
}

function draw(){
    
    background(255);
    for ( let i = 0; i < columns;i++) {
        for ( let j = 0; j < rows;j++) {
            if ((board[i][j] == 1)) fill(100);
            else fill(250);
            stroke(0);
            rect(i * wcell, j * wcell, wcell, wcell);
        }
    }
    
    
    if(run==1){
        runsim();
        displayqueens(game);
    }
}

function init() {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        board[i][j] = (i+j)%2;
      }
    }
    console.log(board);
}

function startpressed(){
    if (run==0 || pause==1){
        console.log('Starting Simulation');
        run = 1;
        pause = 0;
    }else{
        console.log('Pausing Simulation');
        pause = 1;
    }
}

function reset(){
    columns = n;
    N = n;
    rows = columns;
    board = new Array(columns);
    for (let i = 0; i < columns; i++) {
        board[i] = new Array(rows);
    }
    
    wcell = width/n;
    
    init();
    
    console.log('Reseting Simulation');
    run = 0;
    calc = 0;
}
let calc = 0;
async function runsim(){
    if(calc==0){
        calc=1;
        await solve();
        console.log('hiii');
    }
    
}


function isSafe(game, row, col) 
{ 
    let i, j; 
  
    /* Check this row on left side */
    for (i = 0; i < col; i++) 
        if (game[row][i]) {
            console.log('ree1');
            return false; 
        }
  
    /* Check upper diagonal on left side */
    for (i=row-1, j=col-1; i>=0 && j>=0; i--, j--) 
        if (game[i][j]){
            console.log('ree2');
            console.log(game);
            return false;
        } 
  
    /* Check lower diagonal on left side */
    for (i=row+1, j=col-1; j>0 && i<N-1; i++, j--) 
        if (game[i][j]){
            console.log('ree3');
            return false;
        }  
    console.log('trueee');
    return true; 
} 


function displayqueens(game){
    for ( let i = 0; i < columns;i++) {
        for ( let j = 0; j < rows;j++) {
            if (game[i][j]) {
                game[i][j].show();
            }
        }
    }
}