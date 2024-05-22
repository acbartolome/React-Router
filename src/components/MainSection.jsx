import { Routes, Route } from "react-router-dom";
import Red from "./Red";
import Blue from "./Blue";
import Home from "./Home";
import DarkCoffee from "./DarkCoffee";
import Latte from "./Latte";
import Lavender from "./Lavender";
import BotanicalGreen from "./BotanicalGreen";
import '../index.css'

const MainSection = () => {
  return (
      <div id="main-section">
        <Routes>
            {/* add more routes */}
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/darkcoffee" element={<DarkCoffee />} />
          <Route path="/latte" element={<Latte />} />
          <Route path="/lavender" element={<Lavender />} />
          <Route path="/botanicalgreen" element={<BotanicalGreen />} />
        </Routes>
      </div>
  );
};

export default MainSection;
