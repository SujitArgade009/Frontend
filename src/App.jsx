import './App.css';
import ProductTab from "./ProductTab.jsx"

//import the title components

function Description(){
  return <h3>I am Description</h3>
}

function App() {
  return (
    <div>
      <h2>BlockBuster Deals | Shop Now</h2>
      <ProductTab/>
    </div>
  );
}
export default App;
