import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

let apiKey = process.env.REACT_APP_NEWS_API;
console.log(process.env.REACT_APP_NEWS_API);
export default class App extends Component {
  paths = [
    "",
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
    "keywordSearch:id",
  ];
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />

          <Routes>
            {this.paths.map((path, ind) => {
              return (
                <Route
                  exact
                  key={ind}
                  path={`/${path}`}
                  element={
                    <News
                      apiKey={apiKey}
                      setProgress={this.setProgress}
                      key={ind}
                      pageSize={12}
                      country="in"
                      category={path}
                      keyword={""}
                    />
                  }
                />
              );
            })}
          </Routes>
        </Router>
      </div>
    );
  }
}
