import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Counter from './Counter';
import SignIn from './SignIn';
import SuccessPage from './SuccessPage';



const App = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} exact />
          <Route path="/successpage" element={<SuccessPage />}/>
          <Route path="/counter" element={<Counter />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App
