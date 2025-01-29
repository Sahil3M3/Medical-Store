const express=require("express");
const app=express();
itemRoutes=require("./routes/item")
app.use(express.json());

app.use('/item',itemRoutes)


app.listen(5000,console.log("Server has Started")
)