class sys_notify{ //The notification system, woo!
    constructor(context){
        this.game = context; //Phaser reference
        this.notifArray = []; //Array of notification objects.
    }
    
    addNotif(owner, objType = 'reporter'){ //Add a notification, the owner/parent object is a required parameter for this function
        if(objType == 'reporter'){
            owner.notif = new obj_notif(this.game, owner, 'notif', 250, 160); //Make the notification
        }else if(objType == 'department'){
            owner.notif = new obj_notif(this.game, owner, 'smlNotif', 45, 45, 'department'); //Make the notification
        }
        this.notifArray.push(owner.notif); //Push said notification into the array.
        owner.notif.spawn(); //Spawn said notification
    }
    
    removeNotif(owner){ //REMOVE THE NOTIFICATION
        var newArray = []; //New array, similar to how the storyQueue remove function worked.
        for(var i = 0; i < this.notifArray.length; i += 1){ //Go through the current array
            if(!(this.notifArray[i].owner.name == owner.name)){ //Add all the notifications to the new array except the one to be removed.
                newArray.push(this.notifArray[i]);
            }else{
                this.notifArray[i].despawn(); //Despawn the removed notification
            }
        }
    }
}