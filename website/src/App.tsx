import {PageNotFound} from "./pages/PageNotFound"
import {Index} from "./pages/index"
import {Login} from "./pages/login"
import {AddMushroom} from "./pages/addMushroom"
import {AddCategory} from "./pages/addCategory"
import {Register} from "./pages/register"
import {Logout} from "./pages/logout"
import {About} from "./pages/about"
import { MushroomEncyclopedia } from "./pages/mushrooms"
import { FamilyEncyclopedia } from "./pages/families"
import { PublicationPage } from "./pages/publicationPage"

import {Route, Routes} from 'react-router-dom'

// <Route path="/mushrooms" element={ <AddMushroom /> } />

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={ <Index /> } />
            <Route path="/about" element={ <About /> } />

            <Route path="/m/add" element={ <AddMushroom /> } />
            <Route path="/c/add" element={ <AddCategory /> } />

            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/logout" element={ <Logout /> } />
            <Route path="/m/enc" element={ <MushroomEncyclopedia /> } />
            <Route path="/c/enc" element={ <FamilyEncyclopedia /> } />
            <Route path="/p/:slug" element={ <PublicationPage /> } />
        </Routes>
      {/* <Navigation /> */}
    </>
  )
}


export default App;
