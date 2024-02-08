import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import India from "./Pages/India/India";
import Science from "./Pages/Science/Science";
import Sports from "./Pages/Sports/Sports";
import Technology from "./Pages/Technology/Technology";
import Business from "./Pages/Business/Business";
import Entertainment from "./Pages/Entertainment/Entertainment";
import Health from "./Pages/Health/Health";
import USA from "./Pages/USA/USA";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<India />} />
          <Route path="/science" element={<Science />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/business" element={<Business />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/health" element={<Health />} />
          <Route path="/usa" element={<USA />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
