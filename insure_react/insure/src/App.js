import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ApiExample from "./pages/ApiExample";
import AxiosTest from "./pages/AxiosTest";
import ListPage from "./pages/ListPage";
import { NewsPage } from "./pages/NewsPage";
import { HospitalList } from "./pages/HospitalList";
import HospitalDetail from "./pages/HospitalDetail";
import CipherTest from "./pages/CipherTest";
import CarInfo from "./pages/CarInfo";
import InsurePage from "./pages/InsurePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/test" exact>
          <ListPage></ListPage>
        </Route>
        <Route path="/header" exact>
          <Header title="hello router"></Header>
        </Route>
        <Route path="/axios" exact>
          <AxiosTest></AxiosTest>
        </Route>
        <Route path="/news" exact>
          <NewsPage></NewsPage>
        </Route>
        <Route path="/parmacy" exact>
          <ApiExample></ApiExample>
        </Route>
        <Route path="/hospital" exact>
          <HospitalList></HospitalList>
        </Route>
        <Route path="/hospitaldetail" exact>
          <HospitalDetail></HospitalDetail>
        </Route>
        <Route path="/enTest" exact>
          <CipherTest></CipherTest>
        </Route>
        <Route path="/carInfo" exact>
          <CarInfo></CarInfo>
        </Route>
        <Route path="/insure" exact>
          <InsurePage></InsurePage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
