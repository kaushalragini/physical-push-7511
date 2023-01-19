import "./App.css";
 import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
    <Navbar/>
      <MainRoutes />
      <Footer/>
    </div>
  );
}

export default App;
