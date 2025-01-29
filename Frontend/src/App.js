import AddItemForm from "./component/AddItemForm";
import ItemList from "./component/ItemList";
import ItemProvider from "./store/ItemProvider"


function App() {
  return (
    <ItemProvider>
< div >
<AddItemForm/>
<ItemList/>
</div>
</ItemProvider>
  );
}

export default App;
