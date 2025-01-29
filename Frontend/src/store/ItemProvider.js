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
const fetchData= async()=>{
    let url="http://localhost:5000/item/";

    try{

        const response =await fetch(url);
        const {data}=await response.json();
    let array=await JSON.parse(data);    
     array.forEach(item=>{
        console.log(item);
        
        setItems((ps)=>{
            return [...ps,item]
        })
     })
    

    }
    catch(e){
        console.log(e);
        
    }

}
useEffect(()=>{
    fetchData();
},[])

const addToCart=(item)=>{
    setCart((ps)=>{
        return [...ps,item];
    })
    console.log(cart);
    
}
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
