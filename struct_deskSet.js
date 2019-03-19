class struct_deskSet{
    constructor(context, xLoc, yLoc, gridWidth, gridHeight, deskAreaWidth, deskAreaHeight, deskWidth, deskHeight, deskSpriteID, reporterBuffer = 3, maxDesk = 3){
        this.game = context; //Phaser reference
        this.xLocation = xLoc; //X location of the desk set
        this.yLocation = yLoc; //Y location of the desk set
        this.deskWidth = deskWidth; //Width of each individual desk
        this.deskHeight = deskHeight; //Height of each individual desk
        this.deskAreaWidth = deskAreaWidth; //Overall width of the area around each desk
        this.deskAreaHeight = deskAreaHeight; //Overall height of the area around each desk
        this.gridWidth = gridWidth; //How many desks in a row
        this.gridHeight = gridHeight; //How many desks in a column
        this.curDeskNum = 0; //Basically, how many desks have been added? What slot number are we at in the grid?
        this.curColNum = 0; //What column are we currently in?
        this.curRowNum = 0; //What row are we currently in?
        this.deskRowBuffer = 35; //Space between each grid spot
        this.maxDesk = maxDesk; //Maximum number of desks
        this.deskSpriteID = deskSpriteID; //How do the desks look like?
        
        this.deskArray = []; //Array of desk objects.
    }
    
    spawn(){ //SPAWN ALL THE DESKS
        for(var i = 0; i < this.deskArray.length; i += 1){ //For every added desk object, spawn them into the game.
            this.deskArray[i].spawn();
        }
    }
    
    addDesk(){ //Add a new desk to the array of desk objects.
        if(this.curDeskNum < this.maxDesk){ //Do this only if we haven't reached the maximum number of desks.
            var newDesk =  new obj_desk(this.game, ((this.xLocation + (this.deskAreaWidth * this.curColNum)) + Math.floor(this.deskWidth/2)), (this.yLocation + ((this.deskAreaHeight * this.curRowNum)) + (this.curRowNum * this.deskRowBuffer)), this.deskWidth, this.deskHeight, this.deskSpriteID); //Jesus this line is something, I will admit.
            this.deskArray.push(newDesk); //Add the new desk object to the array.
        
        
            if(this.curColNum < (this.gridWidth - 1)){ //If we haven't reached the end of the current column, then keep incrementing.
                this.curColNum = this.curColNum + 1
            }else{
                this.curColNum = 0; //otherwise reset the column number.
                this.curRowNum = this.curRowNum + 1; //Move onto the next row
            }
            this.curDeskNum = this.curDeskNum + 1; //Increase the number of desks by one.
        }
    }
    
    removeDesk(){
        /*To be implemented I suppose. This one is going to be a pain, but basically a function that takes two int coordinates, go to that specified desk, delete the Phaser object, reference, and the overall object. Also transfer everything in the current desk array to a new one without the removed desk. */
    }
    
    update(){ //The update function for the desk set.
        for(var i = 0; i < this.deskArray.length; i += 1){
            this.deskArray[i].updateDesk();
        }
    }
}