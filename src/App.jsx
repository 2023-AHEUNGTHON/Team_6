import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyPage from "./pages/MyPage";
import MyPageEdit from "./pages/MyPageEdit";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/my-page-edit" element={<MyPageEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
