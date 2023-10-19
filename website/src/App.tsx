import {PageNotFound} from "./pages/PageNotFound"
import {Index} from "./pages/index"
import {Login} from "./pages/login"
import {AddMushroom} from "./pages/addMushroom"
import {AddCategory} from "./pages/addCategory"
import {Register} from "./pages/register"
import {Logout} from "./pages/logout"
import {About} from "./pages/about"

import {Route, Routes} from 'react-router-dom'




import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { TRPCProvider } from './lib/trpc';

function App() {
  return (
    <>
      <TRPCProvider>
          <Routes>
            <Route path="/" element={ <Index /> } />
            <Route path="/about" element={ <About /> } />

            <Route path="/m/add" element={ <AddMushroom /> } />
            <Route path="/c/add" element={ <AddCategory /> } />

            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/logout" element={ <Logout /> } />
          </Routes>
      </TRPCProvider>
      {/* <Navigation /> */}
    </>
  )
}


export default App;
