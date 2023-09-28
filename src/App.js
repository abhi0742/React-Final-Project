import Accounts from "./pages/Accounts";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Profilepage from "./pages/Profilepage";
import Reports from "./pages/Reports";
import Settings from "./pages/Setting";
import Loginpage from "./pages/loginpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Loginpage />} />
            <Route exact path="/pages/Dashboard" element={<Dashboard />} />
            <Route exact path="/pages/Reports" element={<Reports />} />
            <Route exact path="/pages/Accounts" element={<Accounts />} />
            <Route exact path="/pages/Products" element={<Products />} />
            <Route exact path="/pages/Settings" element={<Settings />} />
            <Route exact path="/pages/Profilepage" element={<Profilepage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
