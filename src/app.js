import express from "express";
import handlebars from "express-handlebars";
import mongoStore from "connect-mongo";
import session from "express-session";
import mongoose from "mongoose";

import __dirname from "./utils.js";

//Import Routers
import viewsRouter from "./router/viewsRouter/viewsRouter.js";
import productRouter from "./router/mongodb/productRouter.js";
import cartRouter from "./router/mongodb/cartRouter.js";
import ProductsRouter from "./router/fs_router/ProductRouter.js"
import cartsRouter from "./router/fs_router/cartRouter.js"
import sessionsRouter from "./router/mongodb/sessionRouter.js"
import MongoStore from "connect-mongo";

//Conecciones
const app = express();
const server = app.listen(8080, ()=>{
    console.log("Listen on port: 8080")
});
// Coneccion a Mongo
const connection = mongoose.connect("mongodb+srv://egalera:123@cluster0.y0qkwla.mongodb.net/trabInteg?retryWrites=true&w=majority");

//Midleware session  base datos: trabIntg
app.use(session({
    store: new MongoStore({
        mongoUrl:"mongodb+srv://egalera:123@cluster0.y0qkwla.mongodb.net/trabInteg?retryWrites=true&w=majority",
        ttl:60 // 60 segundos
    }),
    secret: "Coder123",
    resave:false,
    saveUninitialized:false
}))

// Midleware de Handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");
//Midleware de express
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({extended:true}));

//Midleware de Routers
app.use("/", viewsRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/products", ProductsRouter);
app.use("/api/carts", cartsRouter);
app.use("/api/sessions", sessionsRouter );



