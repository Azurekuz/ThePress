class obj_reporter{
    constructor(context, xLoc, yLoc, width, height, maxStory = 2){
        this.game = context;
        this.xLocation = xLoc;
        this.yLocation = yLoc;
        this.width = width;
        this.height = height;
        this.maxStorySlots = maxStory;
        
        this.storyArray = [];
    }
}