import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Data, SetData, DataPosts, SetDataPosts } from "./Context";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Articles from "./Components/Articles/Articles";
import CurrentArticle from "./Components/Articles/currentArticle";
import styled from "./App.module.scss";
import { useEffect } from "react";
import Servise from "./API/LoadData";

function App() {
  const [state, setState] = useState({
    title: "Page not found :(",
    body: "Error , page not found",
  });
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let ignore = false;

    const fetchingPost = async () => {
      const response = await Servise.getAll();
      setPosts(response.data);
    };

    !ignore && fetchingPost();

    return () => {
      ignore = true;
    }
  } , [])

  return (
    <Data.Provider value={state}>
      <SetData.Provider value={setState}>
        <DataPosts.Provider value={posts}>
          <SetDataPosts.Provider value={setPosts}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route
                  index
                  element={<Home textH1={"string"} textPage={"string2"}></Home>}
                ></Route>
                <Route path="articles" element={<Articles />}></Route>
                <Route path="currentArticle" element={<CurrentArticle />}></Route>
                <Route path="*" element={null}></Route>
              </Route>
            </Routes>
          </SetDataPosts.Provider>
        </DataPosts.Provider>
      </SetData.Provider>
    </Data.Provider>
  );
}

export default App;
