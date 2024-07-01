import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { appStore } from "./utils/appStore";
import MovieInfoPage from "./components/MovieInfoPage";
import Login from "./components/Login";
import Browse from "./components/Browse";
import SeriesInfoPage from "./components/SeriesInfoPage";
import EpisodeInfoPage from "./components/EpisodeInfoPage";
import SearchPage from "./components/Pages/SearchPage";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Browse />} />
            <Route path="/movie/:id" element={<MovieInfoPage />} />
            <Route path="/series/:id" element={<SeriesInfoPage />} />
            <Route path="/series/:id/:cid" element={<EpisodeInfoPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
