import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Routing from "./routes";
import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/fontawesome/css/all.min.css";
import "./assets/css/dripicons.css";
import "./assets/css/slick.css";
import "./assets/css/meanmenu.css";
import "./assets/css/default.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import Home from "./component/Home/Main";

/*export default function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
} */

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="*" name="Home" element={<Routing />} />
            </Routes>
        </Router>
    );
}
