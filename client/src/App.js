import { Switch, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import About from "./pages/About";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Rooms from "./pages/Rooms";
function App() {
  return (
    <>
    <Navbar />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/about" component={About} />
      </Switch>
    </>
  );
}

export default App;
