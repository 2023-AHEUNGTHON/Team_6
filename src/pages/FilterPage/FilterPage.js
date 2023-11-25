import React,{useState} from 'react';
import './FilterPage.css';
import logo1 from '../../img/icon.png';
import logo2 from '../../img/univ-us.png';
import profileImg from '../../img/profile2.png';
import chat from '../../img/chat.png';
import btn from '../../img/go-back-btn.png';
import profileImg2 from '../../img/profile-img.png';
import {useNavigate} from "react-router-dom";
import Nav from "./../../components/CommonNav";
import Footer from "./../../components/Footer";


function FilterPage(){
    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <div className="FilterPage">
            <Nav />
            <div >
                <img class="btn" src={btn}/>
            </div>
            <div class="logo_wrap">
                <img class="logo1" src={logo1}/>
                <img class="logo2" src={logo2}/>
            </div>
            <div className="title">
                매칭 필터링 결과
            </div>
            <div>
                <hr class="hr1"/>
                <hr class="hr2"/>
            </div>
            <div class="box1">
                <div class="box2">
                    <div class="wrap">
                    <div><img className="p_img1"
                src={profileImg}/></div>
                    <div >
                        <div class="wrap1">
                            <div class="p_name">이름 : 홍길동</div>
                            <div><img class="p_img2" onClick={() => setModalVisible(true)} src={chat}/></div>
                        </div>
                        <div class="p_major">전공 분야 : Server</div>
                        <div class="p_day">프로젝트 진행 가능 기간 <br/><br/><br/>: 2023년 11월 15일 ~ 2023년 11월 25일</div>
                    </div>
                    </div>
                </div>
                <div class="box2">
                    <div class="wrap">
                    <div><img class="p_img1" src={profileImg}/></div>
                    <div >
                        <div class="wrap1">
                            <div class="p_name">이름 : 홍길동</div>
                            <div><img class="p_img2" src={chat}/></div>
                        </div>
                        <div class="p_major">전공 분야 : Server</div>
                        <div class="p_day">프로젝트 진행 가능 기간 <br/><br/><br/>: 2023년 11월 15일 ~ 2023년 11월 25일</div>
                    </div>
                    </div>
                </div>
                <div class="box2">
                    <div class="wrap">
                    <div><img class="p_img1" src={profileImg}/></div>
                    <div >
                        <div class="wrap1">
                            <div class="p_name">이름 : 홍길동</div>
                            <div><img class="p_img2" src={chat}/></div>
                        </div>
                        <div class="p_major">전공 분야 : Server</div>
                        <div class="p_day">프로젝트 진행 가능 기간 <br/><br/><br/>: 2023년 11월 15일 ~ 2023년 11월 25일</div>
                    </div>
                    </div>
                </div>
                <div class="box2">
                    <div class="wrap">
                    <div><img class="p_img1" src={profileImg}/></div>
                    <div >
                        <div class="wrap1">
                            <div class="p_name">이름 : 홍길동</div>
                            <div><img class="p_img2" src={chat}/></div>
                        </div>
                        <div class="p_major">전공 분야 : Server</div>
                        <div class="p_day">프로젝트 진행 가능 기간 <br/><br/><br/>: 2023년 11월 15일 ~ 2023년 11월 25일</div>
                    </div>
                    </div>
                </div>
                <div class="box2">
                    <div class="wrap">
                    <div><img class="p_img1" src={profileImg}/></div>
                    <div >
                        <div class="wrap1">
                            <div class="p_name">이름 : 홍길동</div>
                            <div><img class="p_img2" src={chat}/></div>
                        </div>
                        <div class="p_major">전공 분야 : Server</div>
                        <div class="p_day">프로젝트 진행 가능 기간 <br/><br/><br/>: 2023년 11월 15일 ~ 2023년 11월 25일</div>
                    </div>
                    </div>
                </div>
                <div class="box2">
                    <div class="wrap">
                    <div><img class="p_img1" src={profileImg}/></div>
                    <div >
                        <div class="wrap1">
                            <div class="p_name">이름 : 홍길동</div>
                            <div><img class="p_img2" src={chat}/></div>
                        </div>
                        <div class="p_major">전공 분야 : Server</div>
                        <div class="p_day">프로젝트 진행 가능 기간 <br/><br/><br/>: 2023년 11월 15일 ~ 2023년 11월 25일</div>
                    </div>
                    </div>
                </div>
                
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
                    <div><img class="m_img" src={profileImg} /></div>
                    <div class="m_name">홍길동</div>
                    <div class="m_title">님의 상세 정보</div>
                </div>
                <div class="m_wrap">
                    <div><img class="m_img2" src={profileImg2}/></div>
                    <div class="m_content">SSU LikeLion 11th FE</div>
                </div>
                <div class="m_wrap_content">
                    <div>
                        <div class="m_text0">이름 : 홍길동</div>
                        <div class="m_text0">전공 분야(직무) : Web</div>
                    </div>
                    <div>
                        <div class="m_text0">학교 : 숭실대학교</div>
                        <div class="m_text0">진행 중인 프로젝트 분야 : Web</div>
                    </div>
                    <div>
                        <div class="m_text0">전공 : 소프트웨어학부</div>
                        <div class="m_text0">프로젝트 진행 가능 날짜 <br/>: 2023년 11월 15일 ~ 2023년 11월 25일</div>
                    </div>
                    
                    <div class="m_text0">학년 :  3학년 2학기 재학</div>
                </div>
                <div class="buttonWrap">
                    <button type="button" className="chatBtn" onClick={() => navigate('/chat')}>채팅하기</button>
                </div>
            </div>
            </div>
        )}
            <div class='participate'></div>
            <Footer />
        </div>

    );

    }

export default FilterPage;

