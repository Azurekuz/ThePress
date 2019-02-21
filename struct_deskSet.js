class struct_deskSet{
    constructor(context, xLoc, yLoc, gridWidth, gridHeight){
        this.game = context;
        this.xLocation = xLoc;
        this.yLocation = yLoc;
        this.gridWidth = gridWidth;
        this.gridHeight = gridHeight;
        
        this.deskArray = [];
    }
    
    spawn(){
        for(var i = 0; i < this.deskArray.length; i += 1){
            this.deskArray[i].spawn();
        }
    }
}