const express=require("express")
const router=express.Router();
const itemController=require("../controller/itemController");

router.post("/",itemController.addToItem);

module.exports=router