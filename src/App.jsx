import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyPage from "./pages/MyPage";
import MyPageEdit from "./pages/MyPageEdit";
import CategoryDetail from "./pages/CategoryDetail";
import WritePost from "./pages/WritePost";
import DetailPost from "./pages/DetailPost";
import Chat from "./pages/Chat";
import ChatList from "./pages/ChatList";
import Mainpage from "./pages/Mainpage/Mainpage";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/Mainpage" element={<Mainpage />} />
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/my-page-edit" element={<MyPageEdit />} />

          <Route path="/chat-list" element={<ChatList />} />
          <Route path="/chat" element={<Chat />} />

          <Route path="/:category/write-post" element={<WritePost />} />
          <Route path="/:category/:id" element={<DetailPost />} />
          <Route path="/:category" element={<CategoryDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
