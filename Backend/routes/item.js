const express=require("express")
const router=express.Router();
const itemController=require("../controller/itemController");

router.post("/",itemController.addToItem);
router.get("/",itemController.getItems);

module.exports=router