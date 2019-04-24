class struct_pitchList{
    
    constructor(){
        this.pitchArray = [];
        this.length = 0;
        this.create();
        this.isDone = false;
    }
    
    create(){
        this.pitchArray.push(new struct_story(this, "Hey Boss! So the mayor is announcing a new bikeshare program. There will be docks for the bikes in the downtown area and in midtown. They cost $2 per hour to ride, and the program is thinking of letting metro cards activate them as well. - ", ["Mayor", 'Bike Makers', "Enviro. N.Profit"], [1,3,5], 1));
        this.pitchArray.push(new struct_story(this, "Hey! So just last night, someone was using one of the new communal bikes and died from a drunk biking accident. They steered off the road and went under a truck. What do you want to do? - ", ["City Police", 'Victims Family', "Bike Makers"], [1,3,5], 1));
        this.pitchArray.push(new struct_story(this, "Hey boss! The story of the drunk biker who died got a lot of circulation around town, and the city just announced that they're shutting down the bikeshare system. What do you want to do? - ", ["City Police", 'Victims Family', "Bike Makers"], [1,3,5], 1));
        this.pitchArray.push(new struct_story(this, "Hey, so the Mayor just put out a release saying that the city is striking down the affordable housing proposal put forward by city legislators. The proposal's been going on for months, and many nonprofits have been in favor. - ", ["Mayor", 'House N.Profit', "Residents"], [1,3,5], 1));
        this.pitchArray.push(new struct_story(this, "Hey boss! So rumors have been floating around that the mayor and the Energy Company CEO have been secretly meeting in the town hall building. What do you want to do? - ", ["Mayor", 'Energy CEO', "Social Media"], [1,3,5], 1));
        this.pitchArray.push(new struct_story(this, "Hey boss! So rumors are circulating that a group of teens are terrorizing squirrels in different neighborhoods and shooting them with bb guns. We got a notice from the Eastside Neighborhood Watch Group, and we've seen some social media posts - ", ["Neigh. Watch", 'City Police', "Social Media"], [1,3,5], 1));
        this.pitchArray.push(new struct_story(this, "Hey! The CEO of Energy Company just put out a release saying pollution taxes are too high, and that the carbon-cutting efforts are going to hurt the local economy. What do you want to do? - ", ["Energy CEO", 'Enviro. N.Profit', "Residents"], [1,3,5], 1));
        
        
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