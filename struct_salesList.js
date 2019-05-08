class struct_salesList{
    
    constructor(){
        this.salesArray = [];
        this.create();
        this.isDone = false;
    }
    
    create(){
        this.salesArray.push(new obj_advertiser("001", "King Chicken is a local comfort food restaurant located in the heart of the downtown area. They were established two years ago, and their customers have been growing in number consistently over the last few months.", 50, 500, ["Health", "Local Business"]));
        this.salesArray.push(new obj_advertiser("002", "Eliza Cars is a car dealership in south Towningsville, right next to the bridge. They're a small operation, and they're sales have been somewhat stagnant in the last few years, while still turning a profit.", 50, 300, ["Energy", "Local Business"]));
        this.salesArray.push(new obj_advertiser("003","Energy Company is the biggest conglomerate in Towningsville. They employ over 20,000 residents; they generate 30% of the city's revenue; and they constantly lobby the city legislators' office.", 50, 1500, ["Energy", "Climate", "Taxes"]));
        this.salesArray.push(new obj_advertiser("005","Mary's Coffee is a beloved local cafe, bringing customers from all ages. They want to expand their customer base. They turn a steady profit every year.", 50, 600, ["Local Business"]));
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