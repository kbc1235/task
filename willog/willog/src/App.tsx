import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Image } from "./type/type";
import Header from "./components/header";
import Contents from "./components/contents";

import Home from "./pages/home";
import Bookmark from "./pages/bookmark";
function App() {
  const [like, setLike] = useState<Image[]>([]);
  return (
    <>
      <Header />
      <Contents>
        <Routes>
          <Route
            path="/"
            element={<Home selcted={like} setSelcted={setLike} />}
          />
          <Route
            path="/bookmark"
            element={<Bookmark selcted={like} setSelcted={setLike} />}
          />
        </Routes>
      </Contents>
    </>
  );
}

export default App;
