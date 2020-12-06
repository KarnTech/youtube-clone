import React from "react";
import "./App.css";
import projectStorage from "./Config";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  //THis is going to be a Youtube clone
  //the best clone that I have built
  const [recvideos, setRecvideos] = useState([]);
  const apikey = "AIzaSyC4UxMXjWVbW7qhJfSz38Sa06mbAZuGqWo";
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=CA&key=${apikey}`
      )
      .then((response) => {
        setRecvideos(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos recvideos={recvideos} />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
