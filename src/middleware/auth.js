export const privacy = (privacyType)=>{
    return (req, res, next)=>{
        const {user} = req.session;
        switch(privacyType){
            case "PRIVATE": 
                // ESTA VALIDACION ES PARA DEJAR PASAR A LOS QUE SE HAYAN LOGUEADO
                if(user) return next();
                else res.redirect("/login");
            case "NO_AUTHENTICATED":
                if(!user) return next();
                else res.redirect("/")
        }
    }
}