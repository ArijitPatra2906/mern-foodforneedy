import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home';
import SinglePost from './Pages/SinglePost';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/post/:id" exact element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
