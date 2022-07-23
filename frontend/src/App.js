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


const App = () => {


  return (
    <div >
      <Container maxWidth={false} >
        <BrowserRouter>
          <Routes>
            <Route path="/" >
              <Route index element={<HEXList />} />
              <Route path="HEX">
                  <Route path="new" element={<> <Navbar/> <HEX /></>} />
                  <Route path=":id" element={<> <Navbar/> <HEX /></>} />
                  <Route path="print/:id" element={<HEXprint />} />
                  <Route path="addChange/:id/" element={<> <Navbar/> <HEX /></>} />
              </Route>

            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
