import React from 'react';
import './Mainpage.css';
// import logo1 from '../../img/icon.png';
import logo2 from '../../img/univ-us.png';
import Polygon from '../../img/Polygon.png';

function Mainpage(){
    return(
        <div className="Mainpage">
            <div class="logo_wrap">
                {/*<img class="logo1" src={logo1}/>*/}
                <img class="logo2" src={logo2}/>
            </div>
            <div class="search_wrap">
                <div class="s_text">나와 맞는 팀원을 한번에 찾고 싶다면</div>
                <div ><img class="s_img" src={Polygon}/></div>
            </div>
            <div class="menu_big_wrap">
                <div class="menu_wrap">
                    <div class="m_text">Univ-Us<br/>Category</div>
                </div>
            </div>
            <div class="container">
                <div class="box">Product Manager</div>
                <div class="box">Design</div>
                <div class="box">Photo</div>
                <div class="box">Web</div>
                <div class="box">Composing</div>
                <div class="box">Video</div>
                <div class="box">IOS</div>
                <div class="box">Lyric</div>
                <div class="box">Vocal</div>
                <div class="box">Android</div>
                <div class="box">Marketing</div>
                <div class="box">Dance</div>
                <div class="box">Server</div>
                <div class="box">Advertisement</div>
                <div class="box">etc</div>
            </div>
        </div>
    )
}

export default Mainpage;