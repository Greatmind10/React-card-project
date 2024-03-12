import Navba from "./components/navbar.jsx"
import Product from "./components/product.jsx"
function App() {

  const box= {
  padding:0,
  marginLeft:0,
  display:"grid",
  gap:"10rem",
  gridTemplateColumn: "repeat(5,1fr)",
  }

  return (
    <>
<div  className="bigDiv">

<Navba/>
 
<Product/>
<Product/>
<Product/>
<Product/>
<Product/>
</div>
      
</>
  )
}

export default App
