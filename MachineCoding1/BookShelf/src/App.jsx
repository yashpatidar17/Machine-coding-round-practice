import { Route, Routes } from "react-router";
import "./App.css";

import { BookShelf } from "./Pages/BookShelf";
import { Search } from "./Pages/Search";

function App() {
  return (
  <div>
    <Routes>
      <Route path="/" element={<BookShelf/>}/>
      <Route path="/search" element={<Search/>}/>
    </Routes>
  </div>)
}

export default App;
