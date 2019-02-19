class obj_desk{
    constructor(context, xLoc, yLoc, width, height, spriteID){
        this.game = context;
        this.xLocation = xLoc;
        this.yLocation = yLoc;
        this.width = width;
        this.height = height;
        this.spriteID = spriteID;
        
        this.workingReporter = null;
    }
}