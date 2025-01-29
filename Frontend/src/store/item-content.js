import React from "react";

const itemContent=React.createContext({

    items:[],
    cart:[],
    addToItem:()=>{},
    addToCart:()=>{},
})

export default itemContent;