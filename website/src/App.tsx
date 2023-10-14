import {PageNotFound} from "./pages/PageNotFound"
import {Index} from "./pages/index"
import {Login} from "./pages/login"
import {AddMushroom} from "./pages/addMushroom"

import {Route, Routes} from 'react-router-dom'

import { About } from "./pages/about"


import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { TRPCProvider } from './lib/trpc';

function App() {
  return (
    <>
      <TRPCProvider>
          <Routes>
            <Route path="/" element={ <Index /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/add" element={ <AddMushroom /> } />
          </Routes>
      </TRPCProvider>
      {/* <Navigation /> */}
    </>
  )
}


export default App;