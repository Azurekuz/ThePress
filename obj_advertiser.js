class obj_advertiser{
    constructor(idNum, description, initRelation, income, interestArray, tier, linkStoryID = null){
        this.adID = idNum;
        this.tier = tier;
        this.linkStoryID = linkStoryID;
        this.description = description;
        this.relationVal = initRelation;
        this.advertIncome = income;
        this.interestKeys = interestArray;
        
        this.pitched = false;
    }
    
    interestRelevant(interestKey){
        for(var i = 0; i < this.interestKeys.length; i += 1){
            if(interestKey == this.interestKeys[i]){
               return true;
            }
        }
        return false;
    }
}