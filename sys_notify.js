class sys_notify{
    constructor(context){
        this.game = context;
        this.notifArray = [];
    }
    
    addNotif(owner){
        owner.notif = new obj_notif(this.game, owner, 'notif');
        console.log(owner);
        this.notifArray.push(owner.notif);
        owner.notif.spawn();
    }
    
    removeNotif(owner){
        var newArray = [];
        for(var i = 0; i < this.notifArray.length; i += 1){
            console.log(i);
            if(!(this.notifArray[i].owner.name == owner.name)){
                newArray.push(this.notifArray[i]);
            }else{
                console.log("Destroying Phaser Object");
                this.notifArray[i].despawn();
            }
        }
    }
}