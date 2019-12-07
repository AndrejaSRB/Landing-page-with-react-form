import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import ImageSection from "./components/ImageSection/ImageSection";
import FormSection from "./components/FormSection/FormSection";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import { getUserId } from "./store/actions/action";
import { useDispatch } from "react-redux";
import { BrowserRouter, Redirect } from 'react-router-dom';
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getUserId()), [dispatch]);

// I added redirect just because of task so, my app can include affid parameter
  return (
    <div className="App">
      <BrowserRouter>
      <Redirect from="/" to="/affid=test" />
      <Header />
      <div className="container">
        <ImageSection />
        <FormSection />
      </div>
      <Banner />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
