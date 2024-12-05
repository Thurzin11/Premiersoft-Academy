const Notifyer ={
    async init(){
        const permission = await Notification.requestPermission();
        if(permission !== "granted"){
            throw new Error("Permission denied");
        }

    },
    notify({title,body,icon}){
        new Notification(title, {
            body,
            icon,
            silent: true
        });
    }
}

export { Notifyer };