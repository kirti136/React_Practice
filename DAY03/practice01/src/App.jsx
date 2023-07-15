import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Product from "./Pages/Product";
import Home from "./Pages/Home"
function App() {
  return (
    <div className="App">
      {/* <h2>Navbar</h2> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>{<Home/>}</h1>} />
          <Route path="/product/:product_id" element={<h1><Product/></h1>} />
          <Route path="*" element={<h1>Error</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
