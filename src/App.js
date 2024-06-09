import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { appStore } from "./utils/appStore";
import MovieInfoPage from "./components/MovieInfoPage";
import Login from "./components/Login";
import Browse from "./components/Browse";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/movie/:id" element={<MovieInfoPage />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
