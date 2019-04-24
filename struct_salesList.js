class struct_salesList{
    
    constructor(){
        this.salesArray = [];
        this.create();
        this.isDone = false;
    }
    
    create(){
        this.salesArray.push(new obj_advertiser("King Chicken is a local comfort food restaurant located in the heart of the downtown area. They were established two years ago, and their customers have been growing in number consistently over the last few months.", 50, 16.66, ["Health", "Local Business"]));
        this.salesArray.push(new obj_advertiser("Sales B", 50, 16.66, ["Tech", "Energy"]));
        this.salesArray.push(new obj_advertiser("Sales C", 50, 16.66, ["Agriculture", "Tabacco"]));
        this.salesArray.push(new obj_advertiser("Sale D", 50, 16.66, ["Food", "Hospitality"]));
        
    }
    
    checkAll(){
        var anyUnpitched = false;
        for(var i = 0; i < this.salesArray.length && !anyUnpitched; i += 1){
            if(!this.salesArray[i].pitched){
                anyUnpitched = true;
            }
        }
        this.isDone = !anyUnpitched;
    }
}