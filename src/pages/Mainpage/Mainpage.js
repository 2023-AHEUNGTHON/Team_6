import React,{useState} from 'react';
import "./Mainpage.css";
import mainLogo from "./../../img/mainLogo2.svg";
import Polygon from "../../img/Polygon.png";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/CommonNav";
import Footer from "../../components/Footer";

function Mainpage() {
    const [modalVisible, setModalVisible] = useState(false);
  const categoryOptions = [
    "ProductManager",
    "Design",
    "Photo",
    "Web",
    "Composing",
    "Video",
    "Ios",
    "Lyric",
    "Vocal",
    "Android",
    "Marketing",
    "Dance",
    "Server",
    "Advertisement",
    "etc",
  ];

  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <div className="Mainpage">
        <div className="logo_wrap">
          <img className="logo2" src={mainLogo} />
        </div>
        <div className="search_wrap">
          <div className="s_text" onClick={() => setModalVisible(true)} >나와 맞는 팀원을 한번에 찾고 싶다면</div>
          <div>
            <img className="s_img" src={Polygon} />
          </div>
        </div>
        <div className="menu_big_wrap">
          <div className="menu_wrap">
            <div className="m_text">
              Univ-Us
              <br />
              Category
            </div>
          </div>
        </div>

        <div className="container">
          {categoryOptions.map((category, idx) => (
            <div className="box" onClick={() => navigate(`/${category}`)}>
              {category}
            </div>
          ))}
        </div>
        {/* 모달창 */}
        {modalVisible && (
            <div className="modal">
            {/* 모달창 내용 */}
            <div className="modal-content">
                {/* 모달창 닫기 버튼 */}
                <span className="close" onClick={() => setModalVisible(false)}>
                &times;
                </span>
                {/* 모달창 내용 추가 */}
                {/* 예시: 모달창에 더 많은 정보를 추가하거나 원하는 내용을 표시하세요. */}
                <div class="m_box">
                    <div class="m_name">매칭 필터링</div>
                </div>
            </div>
            </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Mainpage;
