class obj_department{
    constructor(context, xLoc, yLoc, width, height, depName, spriteID){
        this.game = context;
        
        this.xLocation = xLoc;
        this.yLocation = yLoc;
        this.width = width;
        this.height = height;
        this.depName = depName;
        this.spriteID = spriteID;
        
        this.phaserObject = null;
        this.depTextObj = null;
    }
    
    spawnDepartmentObject(){
        this.phaserObject = this.game.physics.add.image(this.xLocation, this.yLocation, this.spriteID);
        this.depTextObj = this.game.add.text(this.xLocation, this.yLocation, this.depName, {fontFamily: "Calibri", align: "center", color:"#000", fontStyle: "bold", fontSize: 32});
        this.depTextObj.setOrigin(0.5);
        this.phaserObject.body.immovable = true;
        this.phaserObject._objRef = this;
        this.game.grp_departments.add(this.phaserObject);
    }
    
    accessDepartment(){
        console.log(this.depName + " has been accessed!");
    }
}