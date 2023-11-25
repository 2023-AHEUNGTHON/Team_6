import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import mainLogo from './../img/navLogo.svg';

const NavWrap = styled.div`
  display: flex;
  height: 65px;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background-color: #FFE7C2;
`

const MainLogo = styled.img`
  width: 90px;
`

const NavRightWrap = styled.div`
  display: flex;
`

const NavList = styled.div`
  display: flex;
`

const Nav = styled.div`
  padding: 0 15px;
  box-sizing: border-box;
  cursor: pointer;
  font-weight: bolder;
  color: #B8AC99;
  font-size: 20px;
`

const UserName = styled.div`
  font-weight: bolder;
  font-size: 20px;
  margin-left: 20px;
`


const CommonNav = () => {
    const navigate = useNavigate();
    return(
        <NavWrap>
            <MainLogo src={mainLogo} onClick={() => navigate('/')}/>
            <NavRightWrap>
                <NavList>
                    <Nav onClick={() => navigate('/Mainpage')}>HOME</Nav>
                    <Nav onClick={() => navigate('/chat-list')}>Chat</Nav>
                    <Nav onClick={() => navigate('/my-page')}>My Page</Nav>
                </NavList>
                <UserName>김어흥</UserName>
            </NavRightWrap>
        </NavWrap>
    )
}

export default CommonNav;