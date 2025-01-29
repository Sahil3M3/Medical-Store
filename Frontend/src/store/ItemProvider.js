import React, { useEffect, useState } from 'react'
import itemContent from "./item-content"

const ItemProvider = (props) => {
    const [items,setItems]=useState([]);
    const [cart,setCart]=useState([]);

const addToItem= async(item)=>{
    await setItems((ps)=>{
        return [...ps,item];
    })
    try {
        let url="http://localhost:5000/item/";
        const response=await fetch(url,{
            method:"POST",
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data=await response.json();
        console.log(data);
        

    } catch (error) {
        console.log(error);
        
    }
    
}
const fetchDataItem= async()=>{
    let url="http://localhost:5000/item/";

    try{

        const response =await fetch(url);
        const {data}=await response.json();
    let array=await JSON.parse(data);    
     array.forEach(item=>{
        
        setItems((ps)=>{
            return [...ps,item]
        })
     })

    }
    catch(e){
        console.log(e);
        
    }

}
const fetchDataCart = async () => {
    let url = "http://localhost:5000/cart/";
  
    try {
      const response = await fetch(url);
      let data = await response.json();
      
      await setCart(data.map((cartItem) => {
        
        return {...cartItem.itemDetails,quantity:cartItem.quantity}}
      ))


    } catch (e) {
      console.log("Error fetching cart items:", e);
    }
  };


useEffect(()=>{
    fetchDataItem();
    fetchDataCart();
},[])

const addToCart = async (id) => {
    console.log(id);
    
    try {
      let url = "http://localhost:5000/cart/";
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ itemId: id }), // Send only itemId
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const data = await response.json();
      console.log("Cart Item Saved:", data);
  
      // Fetch updated cart from the backend
      fetchDataCart();
    } catch (error) {
      console.log("Error adding to cart:", error);
    }
  };
  
    const itemCtx={
        items:items,
        cart:cart,
        addToItem:addToItem,
        addToCart:addToCart,

    }


  return (
    <itemContent.Provider value={itemCtx}>
{props.children}
    </itemContent.Provider>
  )
}

export default ItemProvider
