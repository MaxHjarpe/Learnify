import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/Login";
import DetailPage from "./pages/DetailPage";
import Homepage from "./pages/Homepage";
import Navigation from "./components/Navigation";
import "antd/dist/antd.css";
import Category from "./components/Categories";
import CategoryPage from "./pages/CategoryPage";
import DescriptionPage from "./pages/DescriptionPage";
import BasketPage from "./pages/BasketPage";
import { useAppDispatch } from "./redux/store/configureStore";
import { fetchBasketItemAsync } from "./redux/slice/basketSlice";
import Dashboard from "./pages/Dashboard";
import { fetchCurrentUser } from "./redux/slice/userSlice";
import PrivateRoute from "./components/PrivateRoute";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBasketItemAsync());
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Route exact path="/" component={Category} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/category/:id" component={CategoryPage} />
        <Route exact path="/basket" component={BasketPage} />
        <Route exact path="/course/:id" component={DescriptionPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/detail" component={DetailPage} />
        <PrivateRoute exact path="/profile" component={Dashboard} />
        <PrivateRoute exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </>
  );
}

export default App;
