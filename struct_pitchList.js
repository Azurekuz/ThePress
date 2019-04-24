class struct_pitchList{
    
    constructor(){
        this.pitchArray = [];
        this.length = 0;
        this.create();
        this.isDone = false;
    }
    
    create(){
        this.pitchArray.push(new struct_story(this, "Hey Boss! So the mayor is announcing a new bikeshare program. There will be docks for the bikes in the downtown area and in midtown. They cost $2 per hour to ride, and the program is thinking of letting metro cards activate them as well. - ", ["Mayor", 'Bike Makers', "Enviro. Group"], [1,3,5], 1));
        this.pitchArray.push(new struct_story(this, "Someone dies - ", ["Mayor", 'Bike Makers', "Enviro. Group"], [1,3,5], 1));
        this.pitchArray.push(new struct_story(this, "Bikeshare banned - ", ["Mayor", 'Bike Makers', "Enviro. Group"], [1,3,5], 1));
        this.pitchArray.push(new struct_story(this, "Mayor strikes down affordable housing plan - ", ["Mayor", 'Bike Makers', "Enviro. Group"], [1,3,5], 1));
        
        this.length =  this.pitchArray.length;
    }
    
    checkAll(){
        var anyUnpitched = false;
        for(var i = 0; i < this.pitchArray.length && !anyUnpitched; i += 1){
            if(!this.pitchArray[i].pitched){
                anyUnpitched = true;
            }
        }
        this.isDone = !anyUnpitched;
    }
}