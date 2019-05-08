class struct_pitchList{
    
    constructor(){
        this.pitchArray = [];
        this.availableStoryArray = [];
        this.length = 0;
        this.create();
        this.isDone = false;
    }
    
    create(){
        this.pitchArray.push(new struct_story('001', this, "Hey Boss! So the mayor is announcing a new bikeshare program. There will be docks for the bikes in the downtown area and in midtown. They cost $2 per hour to ride, and the program is thinking of letting metro cards activate them as well. - ", [{sourceLabel:"Mayor"}, {sourceLabel:'Bike Makers'}, {sourceLabel:"Enviro. N.Profit"}], [1,3,5], 1, 1, '002'));
        this.pitchArray.push(new struct_story('002', this, "Hey! So just last night, someone was using one of the new communal bikes and died from a drunk biking accident. They steered off the road and went under a truck. What do you want to do? - ", [{sourceLabel:"City Police"}, {sourceLabel:'Victims Family'}, {sourceLabel:"Bike Makers"}], [1,3,5], 1, 1, '003'));
        this.pitchArray.push(new struct_story('003', this, "Hey boss! The story of the drunk biker who died got a lot of circulation around town, and the city just announced that they're shutting down the bikeshare system. What do you want to do? - ", [{sourceLabel:"City Police"}, {sourceLabel:'Victims Family'}, {sourceLabel:"Bike Makers"}], [1,3,5], 1, 1));
        this.pitchArray.push(new struct_story('004', this, "Hey, so the Mayor just put out a release saying that the city is striking down the affordable housing proposal put forward by city legislators. The proposal's been going on for months, and many nonprofits have been in favor. - ", [{sourceLabel:"Mayor"}, {sourceLabel:'House N.Profit'}, {sourceLabel:"Residents"}], [1,3,5], 1, 2));
        this.pitchArray.push(new struct_story('005', this, "Hey boss! So rumors have been floating around that the mayor and the Energy Company CEO have been secretly meeting in the town hall building. What do you want to do? - ", [{sourceLabel:"Mayor"}, {sourceLabel:'Energy CEO'}, {sourceLabel:"Social Media"}], [1,3,5], 1, 2));
        this.pitchArray.push(new struct_story('006', this, "Hey boss! So rumors are circulating that a group of teens are terrorizing squirrels in different neighborhoods and shooting them with bb guns. We got a notice from the Eastside Neighborhood Watch Group, and we've seen some social media posts - ", [{sourceLabel:"Neigh. Watch"}, {sourceLabel:'City Police'}, {sourceLabel:"Social Media"}], [1,3,5], 1, 1));
        this.pitchArray.push(new struct_story('007', this, "Hey! The CEO of Energy Company just put out a release saying pollution taxes are too high, and that the carbon-cutting efforts are going to hurt the local economy. What do you want to do? - ", [{sourceLabel:"Energy CEO"}, {sourceLabel:'Enviro. N.Profit'}, {sourceLabel:"Residents"}], [1,3,5], 1, 1));
        
        this.initialStories();
        this.length =  this.pitchArray.length;
    }
    
    initialStories(){
        this.availableStoryArray.push(this.pitchArray[0]);
        this.availableStoryArray.push(this.pitchArray[3]);
        this.availableStoryArray.push(this.pitchArray[4]);
        this.availableStoryArray.push(this.pitchArray[5]);
        this.availableStoryArray.push(this.pitchArray[6]);
    }
    
    makeAvailable(findID){
        console.log("Adding Story " + findID);
        for(var i = 0; i < this.pitchArray.length; i += 1){
            if(this.pitchArray[i].storyID == findID){
                this.availableStoryArray.push(this.pitchArray[i]);
                console.log("Added " + this.pitchArray[i].storyID);
                return true;
            }
        }
        return false;
    }
    
    checkAll(){
        var anyUnpitched = false;
        for(var i = 0; i < this.availableStoryArray.length && !anyUnpitched; i += 1){
            if(!this.availableStoryArray[i].pitched){
                anyUnpitched = true;
            }
        }
        this.isDone = !anyUnpitched;
    }
}