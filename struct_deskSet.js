class struct_deskSet{
    constructor(context, xLoc, yLoc, gridWidth, gridHeight, deskAreaWidth, deskAreaHeight, deskWidth, deskHeight, deskSpriteID, reporterBuffer = 3, maxDesk = 3){
        this.game = context;
        this.xLocation = xLoc;
        this.yLocation = yLoc;
        this.deskWidth = deskWidth;
        this.deskHeight = deskHeight;
        this.deskAreaWidth = deskAreaWidth;
        this.deskAreaHeight = deskAreaHeight;
        this.gridWidth = gridWidth;
        this.gridHeight = gridHeight;
        this.curDeskNum = 0;
        this.curColNum = 0;
        this.curRowNum = 0;
        this.deskRowBuffer = 35;
        this.maxDesk = maxDesk;
        this.deskSpriteID = deskSpriteID;
        
        this.deskArray = [];
    }
    
    spawn(){
        for(var i = 0; i < this.deskArray.length; i += 1){
            this.deskArray[i].spawn();
        }
    }
    
    addDesk(){
        if(this.curDeskNum < this.maxDesk){
            var newDesk =  new obj_desk(this.game, ((this.xLocation + (this.deskAreaWidth * this.curColNum)) + Math.floor(this.deskWidth/2)), (this.yLocation + ((this.deskAreaHeight * this.curRowNum)) + (this.curRowNum * this.deskRowBuffer)), this.deskWidth, this.deskHeight, this.deskSpriteID);
            this.deskArray.push(newDesk);
        
        
            if(this.curColNum < (this.gridWidth - 1)){
                this.curColNum = this.curColNum + 1
            }else{
                this.curColNum = 0;
                this.curRowNum = this.curRowNum + 1;
            }
            this.curDeskNum = this.curDeskNum + 1;
        }
    }
    
    removeDesk(){
        
    }
    
    update(){
        for(var i = 0; i < this.deskArray.length; i += 1){
            this.deskArray[i].updateDesk();
        }
    }
}