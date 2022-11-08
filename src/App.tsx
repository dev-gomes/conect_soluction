import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Page } from "./pages/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pages" element={<Home />} />
        <Route path="/page/:id" element={<Page />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App