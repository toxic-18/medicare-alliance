import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Flat from "./components/Flat";
import Cobawell from "./components/Cobawell";
import Disprin from "./components/Disprin";
import Newpenta from "./components/Newpenta";
import Para from "./components/Para";
import Allegra from "./components/Alle";
import House from "./components/House";
import Login from "./components/Login";
import Post from "./components/Post";
import Register from "./components/Register";
import Rent from "./components/Rent";
import Sale from "./components/Sale";
import View from "./components/View";
import About from "./components/About";
import Listing from "./components/Listing";
import Footer from "./components/Footer";
import "./App.css"
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom"




export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Body />} />
        <Route path="/listing" element={<Listing />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact/>} />
        <Route exact path="/Alle" element={<Allegra/>} />
        <Route exact path="/Para" element={<Para/>} />
        <Route exact path="/Cobawell" element={<Cobawell/>} />
        <Route exact path="/Flat" element={<Flat />} />
        <Route exact path="/Newpenta" element={<Newpenta />} />
        <Route exact path="/Disprin" element={<Disprin />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/House" element={<House />} />
        <Route exact path="/Post" element={<Post />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Rent" element={<Rent />} />
        <Route exact path="/Sale" element={<Sale />} />
        <Route exact path="/View" element={<View />} />
        <Route exact path="/Body" element={<Body />} />
       


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);