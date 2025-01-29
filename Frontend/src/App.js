import { Badge, Button } from "react-bootstrap";
import AddItemForm from "./component/AddItemForm";
import ItemList from "./component/ItemList";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useContext, useState } from "react";
import itemContent from "./store/item-content";
import Cart from "./component/Cart";

function App() {
  const itemCtx=useContext(itemContent);
  const [show,setShow]=useState(false);
const hideCart=()=>setShow(false);
const showCart=()=>setShow(true);

  return (
  <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px',marginRight:"30px",marginTop:"2%" }}>
        <Button variant="primary" onClick={showCart}>
          Cart <Badge bg="secondary">{itemCtx.cart.length}</Badge>
        </Button>
      </div>
      <Cart show={show} hide={hideCart}  />
      <div>
        <AddItemForm />
        <ItemList />
      </div>
      </>
  );
}

export default App;
