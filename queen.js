class queen {                
    constructor(i,j,wcell){
        this.y = i*wcell + wcell*0.1; 
        this.x = j*wcell + wcell*0.1;
    }

    show() {
        image(qimg, this.x , this.y , wcell*0.8, wcell*0.8);                     
    }
    
    move() {
        
    }

}