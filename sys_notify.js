class sys_notify{
    constructor(context){
        this.game = context;
        this.notifArray = [];
    }
    
    addNotif(owner){
        owner.notif = new obj_notif(this.game, owner, 'notif')
        this.notifArray.push(owner.notif);
        owner.notif.spawn();
    }
    
    removeNotif(owner){
        var newArray = [];
        for(i = 0; i < this.notifArray; i += 1){
            if(!(this.notifArray[i].owner === owner)){
                newArray.push(this.notifArray[i]);
            }else{
                this.notifArray[i].phaserObject.kill();
            }
        }
    }
}