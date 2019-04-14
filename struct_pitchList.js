class struct_pitchList{
    
    constructor(){
        this.pitchArray = [];
        this.create();
    }
    
    create(){
        this.pitchArray.push(new struct_story(this, "Hey Boss! So the mayor is announcing a new bikeshare program. There will be docks for the bikes in the downtown area and in midtown. They cost $2 per hour to ride, and the program is thinking of letting metro cards activate them as well. - Laura", ["Mayor", 'Bike Makers', "Enviro. Group"], [1,3,5], 1));
    }
}