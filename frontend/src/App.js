import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./bootstrap.min.css";
import {
  Grid,
  Box,
  Card,
  Stack,
  Table,
  TableContainer,
  TableBody,
  Container,
} from "@mui/material";

import HEX from "./pages/HEX";
import HEXList from "./pages/HEXList";
import HEXprint from "./pages/print/HEXprint";
import Navbar from "./components/Navbar";

import WEXList from "./pages/WEXList";
import WEX from "./pages/WEX";
// import WEXprint from "./pages/print/WEXprint";

import BLOG from "./pages/BLOG";
import BlogEdit from "./pages/BlogEdit";


const App = () => {


  return (
    <div >
      <Container maxWidth={false} >
        <BrowserRouter>
          <Routes>
            <Route path="/" >
              <Route index element={<> <Navbar modelType={'HEX'}/> <HEXList /></>} />
              <Route path="HEX">
                  <Route path="new" element={<> <Navbar/> <HEX /></>} />
                  <Route path=":id" element={<> <Navbar/> <HEX /></>} />
                  <Route path="print/:id" element={<HEXprint />} />
                  <Route path="addChange/:id/" element={<> <Navbar/> <HEX /></>} />
              </Route>
              <Route path="WEX">
                  <Route index element={<> <Navbar modelType={'WEX'}/> <WEXList /></>} />
                  <Route path="new" element={<> <Navbar/> <WEX /></>} />
                  <Route path=":id" element={<> <Navbar/> <WEX /></>} />
                  <Route path="print/:id" element={<HEXprint />} />
                  <Route path="addChange/:id/" element={<> <Navbar/> <WEX /></>} />
              </Route>
              <Route path="Blog">
                  <Route index element={<><Navbar modelType={'Blog'}/> <BLOG /></>} />
                  <Route path="new" element={<> <Navbar/> <BlogEdit /></>} />
                  <Route path=":id" element={<> <Navbar/> <BlogEdit /></>} />
                  
              </Route>

            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
