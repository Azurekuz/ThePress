class struct_salesList{
    
    constructor(){
        this.salesArray = [];
        this.create();
    }
    
    create(){
        this.salesArray.push(new obj_advertiser("King Chicken is a local comfort food restaurant located in the heart of the downtown area. They were established two years ago, and their customers have been growing in number consistently over the last few months.", 50, 16.66, ["Health", "Local Business"]));
    }
}