class struct_story{
    constructor(context, description, sourceObjArray, deadlineArray, size){
        this.game = context;
        this.description = description;
        this.sources = sourceObjArray;
        this.deadlines = deadlineArray;
        this.size = size;
        this.progress;
    }
}