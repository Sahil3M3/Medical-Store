const express=require("express");
const app=express();
const itemRoutes=require("./routes/item");
const cartRoutes=require("./routes/cart");
const Cart =require("./model/cart")
const Items=require("./model/items")
const Sequelize=require("./util/database");

app.use(express.json());

app.use('/item',itemRoutes);
app.use("/cart",cartRoutes);

Items.hasMany(Cart,{foreignKey:"itemId",onDelete: 'CASCADE'});
Cart.belongsTo(Items,{foreignKey:"itemId", as: "itemDetails"});


Sequelize.sync().then(()=>{

    app.listen(5000,console.log("Server has Started")
    )
})