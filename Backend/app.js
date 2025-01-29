const express=require("express");
const app=express();
const itemRoutes=require("./routes/item")
const Sequelize=require("./util/database");

app.use(express.json());

app.use('/item',itemRoutes)

Sequelize.sync().then(()=>{

    app.listen(5000,console.log("Server has Started")
    )
})