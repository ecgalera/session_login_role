import {Router} from "express";
import UserManager from "../../dao/fs/mongodb/manager/userManager.js";

const um = new UserManager()

const router = Router();

router.post("/register", async(req, res)=>{
    // console.log(req.body)
    // res.send("ok")
    const result = await um.createUser(req.body);
     res.send({status: "success", payload:result})
 });
 
 router.post("/login", async(req, res)=>{
     // Primero buscamos al usuario
     const {email, password}=req.body;
     const user = await um.getUser({email, password})
    //  if(!user) return res.status(400).send({status:"error", error: "datos incorrectos"});
     if(email === "admin@adming.com" && password ==="123"){
        // hicio la session como admin
        req.session.user={
            name:"Admin",
            email:"...",
            role:"Admin"
        }
        return res.sendStatus(200);
     }
     //Si el usuario esta registrado
     req.session.user={
         name:`${user.first_name} ${user.last_name}`,
         email:user.email 
     }
     res.sendStatus(200)
 })
 
export default router;


