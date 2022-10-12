import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./bootstrap.min.css";
import {  
  Container,
} from "@mui/material";

import HEX from "./pages/HEX";
import HEXList from "./pages/HEXList";
import HEXprint from "./pages/print/HEXprint";
import HEXSpecW from "./pages/print/HEXSpecWindw";
import Navbar from "./components/Navbar";

import WEXList from "./pages/WEXList";
import WEX from "./pages/WEX";
import WEXprint from "./pages/print/WEXprint";
import WEXSpecW from "./pages/print/WEXSpecWindW";

import PSCs from "./pages/TCF/PSCList";
// import TCF from "./pages/TCF/TCF";
import PSCEdit from "./pages/TCF/PSCForm";
import TCFEdit from "./pages/TCF/TCFForm";

import BLOGs from "./pages/Blog/BLOGs";
import Blog from "./pages/Blog/Blog";
import BlogEdit from "./pages/Blog/BlogEdit";


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
                  <Route path="specW/:id" element={<HEXSpecW />} />
                  <Route path="addChange/:id/" element={<> <Navbar/> <HEX /></>} />
              </Route>
              <Route path="WEX">
                  <Route index element={<> <Navbar modelType={'WEX'}/> <WEXList /></>} />
                  <Route path="new" element={<> <Navbar modelType={'WEX'}/> <WEX /></>} />
                  <Route path=":id" element={<> <Navbar modelType={'WEX'}/> <WEX /></>} />
                  <Route path="print/:id" element={<WEXprint />} />
                  <Route path="specW/:id" element={<WEXSpecW />} />
                  <Route path="addChange/:id/" element={<> <Navbar modelType={'WEX'}/> <WEX /></>} />
              </Route>
              <Route path="PSC">
                  <Route index element={<><Navbar modelType={'TCF'}/> <PSCs /></>} />
                  <Route path="new" element={<> <Navbar modelType={'PSC'}/> <PSCEdit /></>} />
                  <Route path="edit/:id" element={<> <Navbar modelType={'PSC'}/> <PSCEdit /></>} />                  
                    <Route path=":PSCId/newTCF" element={<> <Navbar modelType={'TCF'}/> <TCFEdit /></>} />
                    <Route path=":PSCId/editTCF/:TCFId" element={<> <Navbar modelType={'TCF'}/> <TCFEdit /></>} />


              <Route path=":id/TCF">

              </Route>

                  
              </Route>
              <Route path="Blog">
                  <Route index element={<><Navbar modelType={'Blog'}/> <BLOGs /></>} />
                  <Route path="new" element={<> <Navbar modelType={'Blog'}/> <BlogEdit /></>} />
                  <Route path=":id" element={<> <Navbar modelType={'Blog'}/> <Blog /></>} />
                  <Route path="edit/:id" element={<> <Navbar modelType={'Blog'}/> <BlogEdit /></>} />
                  
              </Route>

            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
