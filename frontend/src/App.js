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
import {TCFcreate, TCFedit} from "./pages/TCF/TCFForm";

import BLOGs from "./pages/Blog/BLOGs";
import Blog from "./pages/Blog/Blog";
import BlogEdit from "./pages/Blog/BlogEdit";
import Topbar from "./components/nav-section/Topbar";


const App = () => {


  return (
    <div >
      <Container maxWidth={false} >
        <BrowserRouter>
        {/* <Topbar /> */}
          <Routes>
            <Route path="/" >
              <Route index element={<> <Topbar modelType={'HEX'}/> <HEXList /></>} />
              <Route path="HEX">
                  <Route path="new" element={<> <Topbar /> <HEX /></>} />
                  <Route path=":id" element={<> <Topbar /> <HEX /></>} />
                  <Route path="print/:id" element={<HEXprint />} />
                  <Route path="specW/:id" element={<HEXSpecW />} />
                  <Route path="addChange/:id/" element={<> <Topbar /> <HEX /></>} />
              </Route>
              <Route path="WEX">
                  <Route index element={<> <Topbar /> <WEXList /></>} />
                  <Route path="new" element={<> <Topbar /> <WEX /></>} />
                  <Route path=":id" element={<> <Topbar /> <WEX /></>} />
                  <Route path="print/:id" element={<WEXprint />} />
                  <Route path="specW/:id" element={<WEXSpecW />} />
                  <Route path="addChange/:id/" element={<> <Topbar /> <WEX /></>} />
              </Route>
              <Route path="PSC">
                  <Route index element={<><Topbar /> <PSCs /></>} />
                  <Route path="new" element={<> <Topbar />/> <PSCEdit /></>} />
                  <Route path="edit/:id" element={<> <Topbar /> <PSCEdit /></>} />                  
                  <Route path=":PSCId/newTCF" element={<> <Topbar /> <TCFcreate /></>} />
                    {/* 
                    <Route path=":PSCId/editTCF/:TCFId" element={<> <Navbar modelType={'TCF'}/> <TCFEdit /></>} />
              <Route path=":id/TCF"> */}
              </Route>

              <Route path="TCF">
                <Route path="new" element={<><Topbar />  <TCFcreate /></>} />
                <Route path="edit/:TCFid" element={<> <Topbar /> <TCFedit /></>} />                  
              </Route>

                  
              <Route path="Blog">
                  <Route index element={<> <Topbar /><BLOGs /></>} />
                  <Route path="new" element={<><Topbar />  <BlogEdit /></>} />
                  <Route path=":id" element={<><Topbar />  <Blog /></>} />
                  <Route path="edit/:id" element={<>  <Topbar /><BlogEdit /></>} />
                  
              </Route>

            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
