const Cart=require("../model/cart");
const Items=require("../model/items")

module.exports.addToCart=async (req,res) => {
    
    try{
        const {itemId}=req.body;
        console.log(itemId);

        const item= await Items.findByPk(itemId);
         console.log(item);
         
        if (!item) {
            return res.status(404).json({ message: "Item not found!" });
          }

          const existingCartItem = await Cart.findOne({ where: { itemId } });
    if (existingCartItem) {

        existingCartItem.quantity=Number(existingCartItem.quantity)+1;
         existingCartItem.save();     
 return res.status(201).json({ message: "Item added to cart!" });

    }
    const cart={
        itemId,quantity:1
    }
    await Cart.create(cart);
    res.status(201).json({ message: "Item added to cart!" });

    }  
    catch(error){
        res.status(500).json({ message: "Error adding to cart", error });
    }
    
}
module.exports.getCart = async (req, res) => {
    try {
        const cartItems = await Cart.findAll({
            include: [
                {
                    model: Items,
                    as: "itemDetails",
                    attributes: ["id", "name", "description", "price"], // Fetch item details
                },
            ],
            attributes: ["id", "itemId", "quantity"], // Include cart fields
        });

        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ message: "Error fetching cart items", error });
    }
};
