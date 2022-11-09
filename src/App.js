import GlobalStyle from "./Styles/globalStyles";
import Header from "./Components/Header/Header";
import SideMenu from "./Components/SideMenu/SideMenu";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <GlobalStyle />
        <Header />
        <SideMenu />
      </Router>
    </RecoilRoot>
  );
}

export default App;
