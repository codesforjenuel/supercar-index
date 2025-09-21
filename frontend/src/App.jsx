import { Routes, Route} from "react-router-dom";
import Banner from "./components/Banner";
import ModelPage from "./pages/ModelPage";
import Home from "./pages/Home";
import { cars } from "./data/cars";

function App() {
  return (
    <>
      <Banner />
      <Routes>
        <Route path="/" element={<Home carsList={cars}/>} />
        <Route path="model/:model" element={<ModelPage carsList={cars}/>} />
      </Routes>
    </>
  );
}

export default App;
