// General Imports
import { Routes, Route } from "react-router-dom";
import {useState } from 'react';
import "./App.css";
import axios from 'axios'

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
// import Page from "./pages/Pages/Page";
import SearchPage from "./components/SearchPage/SearchPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
            
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addcomment" element= {<PrivateRoute>Page</PrivateRoute>}></Route>
        <Route path="/search" element={
          <PrivateRoute>
          <SearchPage  />
        </PrivateRoute>
         } 
        />
        <Route path ="/VideoPlayer" element={<VideoPlayer />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
