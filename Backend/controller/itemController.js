const { json } = require("sequelize");
const Items=require("../model/items")

module.exports.addToItem=async (req,res,next) => {
   const {name,description,price}=req.body;
   try {
    const response=await Items.create({name,description,price})
        
    res.status(201).json({message:"Product Add"})
    
   } catch (error) {

    res.status(400).json({error:"Something went Wrong"})
   }

}

module.exports.getItems=async (req,res) => {
    

    try {
   const reponse=await Items.findAll();
   
        res.status(200).json({data:JSON.stringify(reponse)})
    } catch (error) {
        
    }

}