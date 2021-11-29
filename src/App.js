import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import BillPayments from "./components/billpayments";
import Nav from "./components/nav";
import Home from "./components/home";
import { Route, Switch, Redirect } from "react-router-dom";
import PageNotFound from "./components/pageNotFound";
import AddBillPayment from "./components/addbillpayment";
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/ph/add" component={AddBillPayment} />
        <Route path="/ph" component={BillPayments} />
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
