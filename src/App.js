import GlobalStyle from "./Styles/globalStyles";
import Header from "./Components/Header/Header";
import SideMenu from "./Components/SideMenu/SideMenu";
import InfoMenu from "./Components/Mobile/InfoMenu/InfoMenu";

import Overview from "./Pages/Overview";
import Structure from "./Pages/Structure";
import Surface from "./Pages/Surface";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <GlobalStyle />
        <Header />
        <SideMenu />
        <InfoMenu />
        <Routes>
          <Route path="/">
            <Route path="overview" element={<Overview />} />
            <Route path="structure" element={<Structure />} />
            <Route path="surface" element={<Surface />} />
          </Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
