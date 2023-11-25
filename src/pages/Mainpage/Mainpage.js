import React from 'react';
import './Mainpage.css';
import mainLogo from './../../img/mainLogo2.svg';
import Polygon from '../../img/Polygon.png';
import {useNavigate} from "react-router-dom";
import Nav from "./../../components/CommonNav";
import Footer from "./../../components/Footer";

function Mainpage(){
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
        "etc"
    ]

    const navigate = useNavigate();

    return(
        <>
            <Nav />
            <div className="Mainpage">
                <div className="logo_wrap">
                    <img className="mainLogo" src={mainLogo}/>
                </div>
                <div className="search_wrap">
                    <div className="s_text">나와 맞는 팀원을 한번에 찾고 싶다면</div>
                    <div><img className="s_img" src={Polygon}/></div>
                </div>
                <div className="menu_big_wrap">
                    <div className="menu_wrap">
                        <div className="m_text">Univ-Us<br/>Category</div>
                    </div>
                </div>

                <div className="container">
                    {
                        categoryOptions.map((category, idx) => (
                            <div className="box" onClick={() => navigate(`/${category}`)}>{category}</div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Mainpage;