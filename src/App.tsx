import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Pricing from "./Pricing";
function App() {
  return (
    <>
      <div className="appContainer">
        <div className="app">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pricing" element={<Pricing />} />
            </Routes>
          </BrowserRouter>

          <Footer />
        </div>
      </div>
      <div className="bottomGradient">
        Designed and developed by&nbsp;
        <a href="https://nicolastowery.com">Nicolas Towery.</a>
      </div>
    </>
  );
}

export default App;
