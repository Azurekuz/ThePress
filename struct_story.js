class struct_story{ //The story structure that holds info about a given story!
    constructor(context, description, sourceObjArray, deadlineArray, size, tier = 0, linkStoryID = null){
        this.game = context; //Phaser reference, although I don't know why we would need it here.
        this.description = description; //The bubble text
        this.sources = sourceObjArray; //Array of source objects
        this.deadlines = deadlineArray; //Array of deadlines, most likely Ints?
        this.size = size; //How many slots in a reporter's story queue it will take up.
        this.progress; //Story progress object.
        this.tier = tier;
        this.linkStoryID = linkStoryID;
        
        this.pitched = false;
    }
}