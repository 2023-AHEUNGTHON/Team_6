import React from 'react';
import './FilterPage.css';
import logo1 from '../../img/icon.png';
import logo2 from '../../img/univ-us.png';
import profileImg from '../../img/profile2.png';
import chat from '../../img/chat.png';
import btn from '../../img/go-back-btn.png';
function FilterPage(){
    return(
        <div className="FilterPage">
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
            
            
            
        </div>


    );

    }

export default FilterPage;

