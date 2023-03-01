import { Routes, Route, Navigate } from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "animate.css";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<PageOne/>}/>
        <Route path="/PageTwo" element={<PageTwo></PageTwo>}></Route>
        <Route path="/PageThree" element={<PageThree></PageThree>}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
