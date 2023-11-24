import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CategoryDetail from "./pages/CategoryDetail";
import WritePost from "./pages/WritePost";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/write-post" element={<WritePost />} />
          <Route path="/category/:category/:id" element={<CategoryDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
