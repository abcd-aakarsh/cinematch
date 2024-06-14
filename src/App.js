import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { appStore } from "./utils/appStore";
import MovieInfoPage from "./components/MovieInfoPage";
import Login from "./components/Login";
import Browse from "./components/Browse";
import SeriesInfoPage from "./components/SeriesInfoPage";
import EpisodeInfoPage from "./components/EpisodeInfoPage";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/movie/:id" element={<MovieInfoPage />} />
            <Route path="/series/:id" element={<SeriesInfoPage />} />
            <Route path="/series/:id/:cid" element={<EpisodeInfoPage />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
